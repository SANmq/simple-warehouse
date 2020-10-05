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
                path: '/admin/in',
                component: () => import('&/menu/SetIn')
            },
            {
                path: 'out',
                component: () => import('&/menu/GetOut')
            },
            {
                path: 'log',
                component: () => import('&/menu/OpLog')
            },
            {
                path: '/admin/analysis',
                component: () => import('&/menu/Analysis')
            },
            {
                path: 'info',
                component: () => import('&/menu/Info')
            },
        ]
    },
]