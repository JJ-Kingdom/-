import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from './language/en'
import ch from './language/ch'

export default new VueI18n({
	locale: 'ch',
	messages: {
		en,
		ch
	}
})
