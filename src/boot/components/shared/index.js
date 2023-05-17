import { boot } from 'quasar/wrappers'

import veeValidate from './v-validate'

export default boot(async ({ app }) => {
	veeValidate(app)
})
