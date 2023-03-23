<template>
  <div class="d-flex justify-between w-50">
    <input
      :id="cleanElementString"
      v-model="internalValue"
      type="checkbox"
    >
    <label :for="cleanElementString">{{ element }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    element: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      internalValue: null,
    }
  },
  computed: {
    cleanElementString () {
      return this.element.replace(/[ |&;$%@"<>()+,]/g, "")
    },
  },
  watch: {
    internalValue () {
      // EXAMPLE_BAD this.internalValue
      this.$emit('input', this.internalValue ? this.element : null)
    },
  },
}
</script>
