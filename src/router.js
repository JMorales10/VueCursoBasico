import FormPage from "./components/FormPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {path: '/:catchAll(.*)', redirect: '/home'},
  {path: '/home',  name: 'form-page',component: FormPage},
]

const history = createWebHistory()

export const router = createRouter({
  history,
  routes,
})
