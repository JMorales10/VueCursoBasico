<template>
  <div>
    <SubComponent
      :value="mainValue" 
      @click="onInputVale" 
    />
  </div>
</template>

<script>
  import SubComponent from "frontend/components/events/Sub-Component.vue"
  import { eventBus } from "frontend/common/eventBus.js"
  export default {
    components: {
      SubComponent,
    },
    data () {
      return {
        mainValue: 0,
      }
    },
    methods:{
      onInputVale () {
        this.mainValue++
        eventBus.printConsole(this.mainValue)
      },
    },

  }
</script>
