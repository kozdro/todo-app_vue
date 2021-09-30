import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Todos from '../pages/Todos.vue'
import TodoView from '../pages/TodoView.vue'
import AboutProject from '../pages/AboutProject.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/todos',
    component: Todos
  },
  {
    path: '/todo-view/:id',
    component: TodoView
  },
  {
    path: '/about',
    component: AboutProject
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
