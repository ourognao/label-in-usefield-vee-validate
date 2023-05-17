import { configure } from 'vee-validate'
import { i18n } from 'src/boot/i18n'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ja from '@vee-validate/i18n/dist/locale/ja.json'

const japanese = i18n.getLocaleMessage('ja')
const english = i18n.getLocaleMessage('en')

configure({
  generateMessage: localize({
    ja: {
      messages: ja.messages,
      names: {
        mixinEmail: japanese.mixin.form.email
      },
      fields: {}
    },
    en: {
      messages: en.messages,
      names: {
        mixinEmail: english.mixin.form.email
      },
      fields: {}
    }
  })
})
