import App from "frontend/App.vue"
import FormPage from "./components/FormPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {path: '/', name: 'dashboard', component: App},
  {path: '/home',  name: 'form-page',component: FormPage},
]

const history = createWebHistory()

export const router = createRouter({
  history,
  routes,
})
