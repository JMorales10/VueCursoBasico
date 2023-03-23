import 'frontend/styles/main.scss'
import App from "frontend/App.vue"
import { createApp } from "vue"
import { router } from 'frontend/router.js'
import { store } from 'frontend/store/store'

createApp(App)
  .use(router)
  .use(store)
  .mount("#app")
