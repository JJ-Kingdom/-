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
import VueI18n from './i18n/index.js'


console.log(VueI18n)

Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.component('header-box',HeaderBox)

Vue.config.productionTip = false

//import ch from './language/ch'
//import en from './language/en'
Vue.use(VueI18n)
const i = new VueI18n({
    locale: 'ch',
    messages: {
        // ch,
        // enm
        a:11111
    }
})
console.log(i)
new Vue({
    router, 
    i,
    store,   
    render: h => h(App)
}).$mount('#app')