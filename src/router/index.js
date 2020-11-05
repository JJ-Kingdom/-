import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compony from '../views/Compony.vue'
import Product from '../views/Product.vue'
import Journalism from '../views/Journalism.vue'
import User from '../views/User.vue'
import ProductsItem from '@/common/products/ProductsItem.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
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
        component: Journalism
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