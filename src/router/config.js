import Login from '../view/Login'

export default [
    {
        path: '/',
        component: Login,
    },
    // {
    //     path: '/test',
    //     component: () => import('@/view/Test')
    // },
    {
        path: '/admin',
        component: () => import('@/view/Admin'),
        children: [
            {
                path: '',
                component: () => import('&/menu/All')
            },
            {
                path: 'in',
                component: () => import('&/menu/SetIn')
            },
            {
                path: 'out',
                component: () => import('&/menu/TakeOut')
            },
            {
                path: 'log',
                component: () => import('&/menu/OpLog')
            },
            {
                path: 'analysis',
                component: () => import('&/menu/Analysis')
            },
            {
                path: 'classify',
                component: () => import('&/menu/Classify')
            },
        ]
    },
]