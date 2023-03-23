<template>
  <textarea
    v-model="internalValue"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Escribe aquí',
    },
  },
  data () {
    return {
      internalValue: null,
    }
  },
  watch: {
    internalValue (internalValue) {
      this.$emit('input', internalValue)
    },
  },
}
</script>
