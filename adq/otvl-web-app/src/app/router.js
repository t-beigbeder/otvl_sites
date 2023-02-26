import { createRouter, createWebHistory } from 'vue-router'
//import XPage from '../components/pages/XPage.vue'
import Page from '../components/pages/Page.vue'
import XBlog from '../components/pages/XBlog.vue'
import Blog from '../components/pages/Blog.vue'
import Err404 from '../components/pages/Err404.vue'
import Err5xx from '../components/pages/Err5xx.vue'
import apputils from './apputils.js'

const routes = [
  { path: '/home', component: Page },
  { path: '/qi-gong', component: Page },
  { path: '/qi-gong/:location+', component: Page },
  { path: '/pratique', component: Page },
  { path: '/pratique/actualites', component: XBlog, meta: { isIndex: true } },
  { path: '/pratique/actualites/:location+', component: Blog },
  { path: '/prive', component: Page },
  { path: '/prive/:location+', component: Page },
  { path: '/a-propos', component: Page },
  { path: '/a-propos/:location+', component: Page },
  { path: '/err404', component: Err404, meta: { isLocal: true } },
  { path: '/err5xx', component: Err5xx, meta: { isLocal: true } },
  { path: '/', redirect: '/home' },
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
