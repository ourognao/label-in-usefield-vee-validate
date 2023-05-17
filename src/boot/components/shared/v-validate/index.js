import { ErrorMessage, Field, Form } from 'vee-validate'

import VeeValidateInput from 'src/components/shared/v-validate/input.vue'

export default function veeValidate (app) {
  app.component('VeeValidateErrorMessage', ErrorMessage)
  app.component('VeeValidateField', Field)
	app.component('VeeValidateForm', Form)

  app.component('VeeValidateInput', VeeValidateInput)
}
