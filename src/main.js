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

import VueI18n from 'vue-i18n' //引入
Vue.use(VueI18n) //安装
const i18n = new VueI18n({
	locale:'en' ,//定义为默认中文  en-US
	messages:{
        'zh':require('./lang/zh-cn') ,//中文语言包
        'en':require('./lang/zh-en') //英文语言包
	}
})

Vue.prototype.$http = axios

Vue.use(ElementUI)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')