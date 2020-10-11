const jwt = require('jsonwebtoken')
const secret = 'mqKey'  // 最好随机生成
const cookieKey = 'token'


/**
 * 用于做异步函数的异常捕获处理,
 * handler应该做两部分处理,没有异常且完成，则发送响应；没有异常未完成不做处理；捕获错误，发出错误响应
 * 如果尚未完成不想发送信息，则可以通过再handler中return 'un accomplish'来完成
 * @param handler
 * @returns {function(...[*]=)}
 */
function asyncHandle(handler) {
    return async (req, res, next) => {
        try {
            const data = await handler(req, res, next)
            // 如果接收到的data的值为next,则传递到下一个中间件
            if (data) {
                console.log(typeof data, data)
                res.send(data)
                return null
            } else {
                // 没有返回值就向后传
                next()
            }
        } catch (e) {
            // 捕获到异常，则使用错误信息接口格式
            console.log(e)
            res.status(500).send(e.toString())
        }

    }
}

/**
 * 给用户添加认证信息，默认时长60分钟
 * @param res
 * @param max  最大保留时间,时间单位默认是ms 很坑，默认60分钟的保留时间
 * @param info  //{name: admin.name} 存放参数格式
 */
function publish(res, max = 60 * 60 * 8, info) {
    const token = jwt.sign(info, secret, {
        expiresIn: max
    })
    res.cookie(cookieKey, token, {maxAge: max * 1000, path: '/'})
}


/**
 * 用户解密信息,用于处理cookie上的用户token信息
 * 并将token得到的用户数据信息保存到res.$user上
 * @param res     请求
 * @param req     响应
 * @param next    传递
 * @returns {null|*}  解析成功的结构是{name,password}
 */
function verify(req, res, next) {
    // 如果请求方法时options直接放行
    if (req.method === 'OPTIONS') {
        console.log(req.method)
        res.status(200).end()
        return null
    }

    //尝试从cookie中获取
    let token = req.cookies[cookieKey]; //cookie中没有
    if (token) {
        // 得到token信息
        try {
            req.$admin = jwt.verify(token, secret);
            // 如果用户的时长在5分钟内操作,为其进行自动续期30分钟
            const now = Date.now()
            if (req.$admin.exp - now <= 5 * 60) {
                console.log('这里执行了3')
                module.exports.publish(res, 30 * 60, {name: req.$admin.name})
            }
            next()
        } catch (e) {
            console.log('这里执行了1')
            res.status(401).send('访问无用户认证1')
        }
    } else {
        console.log('这里执行了2')
        res.status(401).send('访问无用户认证2')
    }
}


module.exports = {publish, verify, asyncHandle}
