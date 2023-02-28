import { createRouter, createWebHistory } from 'vue-router'
import XPage from '../components/pages/XPage.vue'
import Page from '../components/pages/Page.vue'
import ProjectPage from '../components/pages/ProjectPage.vue'
import Err404 from '../components/pages/Err404.vue'
import Err5xx from '../components/pages/Err5xx.vue'
import apputils from './apputils.js'

const routes = [
  { path: '/projets', component: XPage, meta: { isIndex: true } },
  { path: '/projets/:location+', component: ProjectPage },
  { path: '/actualités', component: Page },
  { path: '/a-propos', component: Page },
  { path: '/contacts', component: Page },
  { path: '/err404', component: Err404, meta: { isLocal: true } },
  { path: '/err5xx', component: Err5xx, meta: { isLocal: true } },
  { path: '/', redirect: '/projets' },
  { path: '/:pathMatch(.*)*', component: Err404, meta: { isLocal: true } }
]

const router = createRouter({

  history: createWebHistory(),

  routes: routes,

  scrollBehavior(to, from, savedPosition) {
    apputils.scrollBehavior(to, from, savedPosition)
  }

})

export default router
