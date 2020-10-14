import Login from '../view/Login'

export default [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/test',
        component: () => import('../view/Test')
    },
    {
        path: '/manage',
        component: () => import('../view/Admin'),
        redirect: '/manage/add',
        children: [
            {
                path: 'add',
                component: () => import('&/manage/AddGood')
            },
            {
                path: 'sale',
                component: () => import('&/manage/Sale')
            },
            {
                path: 'cost',
                component: () => import('&/manage/Cost')
            },
            {
                path: 'log',
                component: () => import('&/manage/OpLog')
            }
        ]
    },
    {
        path: '/analysis',
        component: () => import('../view/Admin'),
        redirect: '/analysis/money',
        children: [
            {
                path: 'money',
                component: () => import('&/analysis/Analysis')
            },
            {
                path: 'store',
                component: () => import('&/analysis/Store')
            }
        ]
    },
    {
        path: '/config',
        component: () => import('../view/Admin'),
        redirect: '/config/classify',
        children: [
            {
                path: 'classify',
                component: () => import('&/config/Classify')
            },
        ]
    },
    {
        path: '/admin',
        component: () => import('../view/Admin'),
        children: [
            {
                path: '',
                component: () => import('&/menu/All')
            },
        ]
    },
]