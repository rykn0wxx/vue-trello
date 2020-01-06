/**
 * Vue Router
 * @library
 */
// Lib imports
import Vue from 'vue'
import Router from 'vue-router'

// Helpers
import { scrollBehavior } from '@/services/utils'
import routerPaths from './router-paths'
import routeGenerator from './route-generator'
// import store from '../store'

const appRoutes = routerPaths.map(path => routeGenerator(path)).concat([{ path: '*', redirect: '/' }])

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: appRoutes,
  scrollBehavior,
  linkActiveClass: 'app__router--link--active'
})

router.beforeEach((to, from, next) => {
  // const isOffline = store.getters['app/IS_OFFLINE']
  // const isAuthenticated = store.getters['users/IS_LOGGEDIN']
  // console.log('from router gurard', Vue.prototype)
  const isOffline = true
  const isAuthenticated = true
  if (to.meta.public) {
    next()
  } else {
    if (isAuthenticated || isOffline) {
      next()
    } else {
      next()
    }
  }
})

export default router
