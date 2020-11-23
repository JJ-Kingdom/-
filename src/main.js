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

import i18n from './i18n'

Vue.prototype.$http = axios

Vue.use(ElementUI)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')