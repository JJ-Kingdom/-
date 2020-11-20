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
import VueI18n from 'vue-i18n'



Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
		homeNav:'首页',
		userNav:'联系我们',
		title:'联系我们',
		itemOne:{
			listTitle:'地址',
			region:'北京市大兴区',
			House:'金苑路32号1墥',
			room:'2层221室'
		},
		itemTow:{
			listTitle:'联系我们',
			contactNumber:'邮箱:XuanHe123@163.com',
			ContactHotline:'联系热线:100-1237999',
		},
		itemThree:{
			listTitle:'电子邮箱',
			mailBox1:'邮箱:XuanHe123@163.com',
			mailBox2:'邮箱:XuanHe@qq.com',
		},
		itemFour:{
			listTitle:'传真',
			fax1:'传真:10-99998888',
			fax2:'传真:10-99977766',
		}
    }
  },
  ja: {
    message: {
		homeNav:'HomePage',
		userNav:'ContactUs',
		title:'ContactUs',
		itemOne:{
			listTitle:'Address',
			region:'DaxingDistrictBeijing',
			House:'1, 32 Jinyuan Road',
			room:'Room 221, 2nd floor'
		},
		itemTow:{
			listTitle:'ContactUs',
			contactNumber:'Tel: 021-1234567999',
			ContactHotline:'Contact hotline: 100-1237999',
		},
		itemThree:{
			listTitle:'MailBox',
			mailBox1:'mailbox :XuanHe123@163.com',
			mailBox2:'mailbox :XuanHe@qq.com',
		},
		itemFour:{
			listTitle:'Fax',
			fax1:'Fax: 10-99998888',
			fax2:'Fax: 10-99977776',
		}
    }
  }
}
const i18n = new VueI18n({
  locale: 'ja', // 设置地区
  messages, // 设置地区信息
})

Vue.config.productionTip = false

new Vue({
	i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')