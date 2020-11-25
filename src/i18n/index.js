import vue from 'vue'
import VueI18n from 'vue-i18n' 
import ch from './language/ch'
import en from './language/en'
vue.use(VueI18n)
export default new VueI18n({
    locale: 'ch',
    messages: {
        ch,
        en
    }
})
