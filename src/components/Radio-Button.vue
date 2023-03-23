<template>
  <div>
    <div 
      v-for="(element, idx) in elements"
      :key="idx"
      class="d-flex justify-between w-50"
    >
      <input
        :id="cleanString(element)"
        v-model="internalValue"
        :value="element"
        type="radio"
      >
      <label :for="cleanString(element)">{{ element }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    elements: {
      type: Array,
      default: () => [],
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
  methods: {
    cleanString (string) {
      return string.replace(/[ |&;$%@"<>()+,]/g, "")
    },
  },
}
</script>
