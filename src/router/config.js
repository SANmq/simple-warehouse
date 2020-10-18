import Login from '../view/Login'

export default [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/msale',
        component: () => import('../view/Admin'),
        redirect: '/msale/onsale',
        children: [
            {
                path: 'onsale',
                component: () => import('&/sale-manage/OnSale')
            },
            {
                path: 'outsale',
                component: () => import('&/sale-manage/OutSale')
            },
            {
                path: 'forsale',
                component: () => import('&/sale-manage/ForSale')
            },
            {
                path: 'reback',
                component: () => import('&/sale-manage/Reback')
            },
            {
                path: 'saleover',
                component: () => import('&/sale-manage/SaleOver')
            },
            {
                path: 'log',
                component: () => import('&/sale-manage/StateChangeLog')
            }
        ]
    },
    {
        path: '/mstore',
        component: () => import('../view/Admin'),
        redirect: '/mstore/all',
        children: [
            {
                path: 'all',
                component: () => import('&/store-manage/AllGood')
            },
            {
                path: 'add',
                component: () => import('&/store-manage/AddGood')
            },
            {
                path: 'cost',
                component: () => import('&/store-manage/Cost')
            },
            {
                path: 'upshelves',
                component: () => import('&/store-manage/UpShelves')
            },
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
]