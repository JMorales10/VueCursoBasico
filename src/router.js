import FormPage from "./components/FormPage.vue"
import { createRouter } from "vue-router"

const routes = [
  {path: '*', redirect: '/home'},
  {path: '/home',  name: 'form-page', component: FormPage},
]

export const router = createRouter({
  routes,
})
