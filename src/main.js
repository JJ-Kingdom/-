import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'


import axios from 'axios'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/swiper-bundle.css'

import '@/assets/css/reset.css'
import '@/lib/sass/common.sass'
import '@/lib/css/animate.min.css'

import '@/lib/js/rem'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')