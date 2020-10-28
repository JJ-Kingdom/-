import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compony from '../views/Compony.vue'
import Product from '../views/Product.vue'
import Journalism from '../views/Journalism.vue'
import User from '../views/User.vue'



Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: "/home"
    }
    ,{
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
        path: '/product',
        name: 'Product',
        component: Product
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