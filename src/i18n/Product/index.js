import cn from '@/i18n/Product/cn.js'
import en from '@/i18n/Product/en.js'
import Vue from 'vue'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
console.log(messages)

const messages = {
    'cn':cn,
    'en':en
}

var i18n = new VueI18n({
    locale: 'en', // 语言标识
    messages
})

export default  i18n 