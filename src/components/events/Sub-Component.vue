<template>
  <div>
    {{ value }}

    <div>
      Pulsa para sumar
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
  },
 }
</script>
