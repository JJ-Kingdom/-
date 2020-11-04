import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Compony from '../views/Compony.vue'
import Product from '../views/Product.vue'
import Journalism from '../views/Journalism.vue'
import User from '../views/User.vue'
import journalismDetail from '../components/journalismDetail/journalismDetail.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
        components: Home
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