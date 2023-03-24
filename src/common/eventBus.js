import Vue from 'vue'

export const eventBus = new Vue(
  {
    methods: {
      printConsole (value) {
        this.$emit('printConsole', value)
      },
    },
  }
)

