import App from './App.vue'
import { createApp } from 'vue'

export const eventBus = createApp(App)

createApp(App).mount('#app')
