<template lang="pug">
q-input(
  :autofocus="autofocus"
  :clearable="clearable"
  :counter="counter"
  :dense="dense"
  :disable="disable"
  :for="for"
  :hint="hint"
  :error-message="errorMessage"
  :error="!!errorMessage"
  :input-class="inputClass"
  :label="label"
  :mask="mask"
  :min="min"
  :max="max"
  :maxlength="maxlength"
  :model-value="modelValue"
  :outlined="outlined"
  :prefix="prefix"
  :step="step"
  :type="type"
  v-model="value"
  @update:model-value="update"
)
  template(v-slot:[template.slot] v-for="(template, index) in templates")
    q-icon(
      :class="template.class || ''"
      :name="$mixin.icons(template.icon.name)"
      :size="template.icon.size || 'xs'"
      @click="template.icon.events ? $emit(template.icon.events.click.name, template.icon.events.click.value) : null")
  q-popup-proxy(
    v-if="proxy"
    :ref="proxy.ref"
    :transition-hide="proxy.transition.hide || 'slide-down'"
    :transition-show="proxy.transition.show || 'slide-up'"
  )
    q-date(
      v-if="proxy.date"
      :default-year-month="proxy.date.defaultYearMonth"
      :locale="proxy.locale"
      :mask="proxy.date.mask"
      minimal
      :options="proxy.date.options"
      today-btn
      v-model="value"
    )
    q-time(
      v-if="$mixin.hasKey(proxy, 'time')"
      v-model="value"
      @update:model-value="(value, details) => update({ value, details })"
    )
</template>

<script>
import { useField } from 'vee-validate'

export default {
  props: {
    autofocus: { type: Boolean, required: false, default: false },
    clearable: { type: Boolean, required: false, default: true },
    counter: { type: Boolean, required: false, default: false },
    dense: { type: Boolean, required: false, default: true },
    disable: { type: Boolean, required: false, default: false },
    for: { type: String, required: false },
    hint: { type: String, required: false, default: null },
    keepValueOnUnmount: { type: Boolean, required: false, default: false },
    initialValue: { type: [String, Number], required: false, default: null },
    inputClass: { type: String, required: false, default: null },
    label: { type: String, required: false },
    localize: { type: String, required: false },
    mask: { type: String, required: false, default: '' },
    min: { type: Number, required: false, default: null },
    max: { type: Number, required: false, default: null },
    maxlength: { type: Number, required: false, default: null },
    modelValue: { type: String, required: false, default: null },
    name: { type: String, required: true },
    outlined: { type: Boolean, required: false, default: true },
    proxy: { type: Object, required: false },
    prefix: { type: String, required: false, default: null },
    rules: { type: [String, Object], required: false },
    step: { type: Number, required: false, default: null },
    templates: { type: Object, required: false },
    type: { type: String, required: false, default: 'text' },
    useWatcher: { type: Boolean, required: false, default: false }
  },
  mounted () {
    const { errorMessage, resetField, value } = useField(
      this.name,
      this.rules,
      {
        initialValue: this.initialValue,
        keepValueOnUnmount: this.keepValueOnUnmount,
        label: this.localize ? this.localize : null
      }
    )

    this.errorMessage = errorMessage
    this.resetField = resetField
    this.value = value
  },
  data () {
    return {
      errorMessage: null,
      resetField: null,
      value: null
    }
  },
  watch: {
    value () {
      if (!this.useWatcher) return

      this.update(this.value)
    }
  },
  methods: {
    update (value) {
      if (this.proxy) this.$mixin.closeCalendar({ context: this, name: this.proxy.ref })

      this.$emit('model', value)
    }
  }
}
</script>
