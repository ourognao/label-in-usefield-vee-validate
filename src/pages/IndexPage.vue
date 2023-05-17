<template lang="pug">
div(class="row justify-center").q-mb-md.q-mt-lg
  div(class="col-7")
    q-card
      q-card-section
        vee-validate-form(
          :initial-values="initialValues"
          @submit="onSubmit")
          div(class="row")
            div(class="col-12").text-center Label do not precedence issue

          q-separator(spaced)

          div(class="row").q-mb-sm.q-mt-md
            div(class="col-6").q-pl-sm
              vee-validate-input(
                :label="$t('mixin.form.email')"
                localize="mixinEmail"
                name="email"
                rules="required"
                type="email"
              )

          q-separator(spaced)

          div(class="row").text-right
            div(class="col-12")
              q-btn(
                push
                color="primary"
                label="Submit"
                type="submit"
              )
</template>

<script>
import { defineComponent } from 'vue'
import { setLocale } from '@vee-validate/i18n';

export default defineComponent({
  name: 'IndexPage',
  mounted () {
    setLocale('ja');
  },
  data () {
    return {
      initialValues: {
        subject: null,
        message: null
      }
    }
  },
  methods: {
    async onSubmit (values, /* actions */) {
      console.log(values)
    }
  }
})
</script>
