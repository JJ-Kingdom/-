import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/lib/js/rem.js'
import '@/lib/sass/common.sass'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'animate.css'
import HeaderBox from '@/components/commit/header.vue'


Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.component('header-box',HeaderBox)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')