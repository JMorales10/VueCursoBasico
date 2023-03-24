<template>
  <nav>
    <router-link to="/home">
      Home
    </router-link>
    <router-link to="/settings">
      Api
    </router-link>
    <router-link to="/events">
      Events
    </router-link>
    <router-view />
  </nav>
</template>

<script>
import { eventBus } from "frontend/common/eventBus.js"
export default {
  created () {
    eventBus.$on('printConsole', (value) => {
      // eslint-disable-next-line no-console
      console.log(value)
    })
  },
}
</script>
