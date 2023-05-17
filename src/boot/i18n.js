import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const i18n = createI18n({ locale: 'ja', fallbackLocale: 'ja', messages })

const globalI18n = i18n.global

export default boot(({ app }) => {
  app.use(i18n)

  app.config.globalProperties.$localeMessages = globalI18n.messages.value
})

export { globalI18n as i18n }
