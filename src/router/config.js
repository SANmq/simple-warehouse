import Login from '../view/Login'

export default [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/admin',
        component: () => import('@/view/Admin'),
        children: [
            {
                path: 'all',
                component: () => import('&/menu/All')
            },
            {
                path: 'in',
                component: () => import('&/menu/SetIn')
            },
            {
                path: 'out',
                component: () => import('&/menu/GetOut')
            },
            {
                path: 'op',
                component: () => import('&/menu/OpLog')
            },
            {
                path: 'analysis',
                component: () => import('&/menu/Analysis')
            },
            {
                path: 'info',
                component: () => import('&/menu/Info')
            },
        ]
    },
]