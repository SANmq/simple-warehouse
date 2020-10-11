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
        children: [
            {
                path: 'add',
                component: () => import('&/manage/AddGood')
            },
            {
                path: 'outbound',
                component: () => import('&/manage/Outbound')
            },
            {
                path: 'inbound',
                component: () => import('&/manage/Inbound')
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