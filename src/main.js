import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/swiper-bundle.css'
import 'swiper-animate-cn/animate.min.css'


import '@/lib/js/rem'

import '@/assets/css/reset.css'
import '@/lib/sass/common.sass'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')