import settings from 'frontend/store/settings'
import Vuex from 'vuex'
import { createApp } from 'vue'

createApp().use(Vuex)

export const store = new Vuex.Store({
  modules: {
    settings,
  },
})
