<template>
  <div>
    {{ settings }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      settings: null,
      json: null,
    }
  },
  created () {
    this.settings = this.fetchModulePermissions()
  },
  methods: {
    ...mapActions([
      'fetchModulePermissions',
    ]),
  },
}
</script>
