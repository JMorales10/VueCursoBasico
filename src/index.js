import 'frontend/styles/main.scss'
import App from "frontend/App.vue"
import { createApp } from "vue"
import { router } from 'frontend/router.js'

createApp(App)
  .use(router)
  .mount("#app")
  .config.devtools = true
