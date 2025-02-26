import { createRouter, createWebHashHistory } from 'vue-router'
import Bio from '../views/Bio.vue'
import Blog from '../views/Blog.vue'
import Experience from '../views/Experience.vue'
import Project from '../views/Project.vue'

const routes = [
  { path: '/', redirect: '/bio' }, 
  { path: '/bio', component: Bio },
  { path: '/blog', component: Blog },
  { path: '/experience', component: Experience },
  { path: '/project', component: Project }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router