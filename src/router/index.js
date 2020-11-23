import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Compony from '../views/Compony.vue'
import Product from '../views/Product.vue'
import Journalism from '../views/Journalism.vue'
import User from '../views/User.vue'
import ProductsItem from '@/common/products/ProductsItem.vue'
import journalismDetail from '../components/journalismDetail/journalismDetail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/compony',
        name: 'Compony',
        component: Compony
    },
    {
        path: '/product/:index',
        name: 'Product',
        component: Product,
    },
    {
        path:'/ProductsItem/:index/:id',
        name:'ProductsItem',
        component:ProductsItem
    },
    {
        path: '/journalism',
        name: 'Journalism',
        component: Journalism,
        meta: {
            show: true
        },
        children:[
            {
                path:'journalismDetail',
                component:journalismDetail,
               
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: User
    }
]

const router = new VueRouter({
    routes
})

export default router
