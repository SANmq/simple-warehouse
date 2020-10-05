<template>
    <div class="set-in">
        <div style="background-color: #F5F7FA;border-bottom: 1px dotted #aaa;">
            <el-steps :active="active" simple finish-status="success">
                <el-step title="商品参数信息" description=""></el-step>
                <el-step title="商品展示信息" description=""></el-step>
            </el-steps>
        </div>
        <el-form ref="form" :model="form" label-width="80px" v-show="active===0">
            <el-form-item label="商品名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品类型">
                <el-input v-model="form.kind"></el-input>
            </el-form-item>
            <el-form-item label="商品品牌">
                <el-input v-model="form.brand"></el-input>
            </el-form-item>
            <el-form-item label="商品参数">
                <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 10, maxRows: 15}" resize="none"></el-input>
            </el-form-item>
            <el-form-item label="商品数量">
                <el-input type="Number" v-model.number="form.num"></el-input>
            </el-form-item>
            <el-form-item style="text-align: center">
                <el-button type="primary" @click="next">下一步</el-button>
            </el-form-item>
        </el-form>

        <el-form ref="form" :model="form" label-width="80px" v-show="active===1" @submit.prevent="submit">
            <el-form-item label="商品成本">
                <el-input v-model.number="form.cost"></el-input>
            </el-form-item>
            <el-form-item label="商品售价">
                <el-input v-model.number="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-input v-model="form.photo"></el-input>
            </el-form-item>
            <el-form-item label="是否上架">
                <el-checkbox v-model="form.sale"></el-checkbox>
            </el-form-item>
            <el-form-item style="text-align: center">
                <el-button type="primary" @click="prev">上一步</el-button>
                <el-button type="primary" @click="submit">确认提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "setIn",
        data() {
            return {
                form: {
                    name: '',
                    brand: '',
                    kind: '',
                    desc: '',
                    num: 1,
                    cost: 0,
                    price: 0,
                    photo: '',
                    sale: true
                },
                active: 0
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            prev() {
                if (this.active-- < 0) this.active = 2;
            },
            submit() {
                // 成功
                console.log(this.form)
                this.active++
                this.$msgbox('入库成功', () => {
                    this.active = 0
                })

            }
        }
    }
</script>

<style lang="less">
    .set-in {
        .el-steps {
            width: 400px;
            margin: auto;
        }

        .el-form {
            width: 600px;
            margin: 20px auto;
        }
    }
</style>