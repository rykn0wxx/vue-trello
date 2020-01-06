/**
 * Vue
 * @library
 */
// Lib imports
import Vue from 'vue'

// Application plugins
import '@/sass/app.scss'
import './components/global'
import { sync } from 'vuex-router-sync'
import meta from '@/plugins/meta'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'

// Application implementation
sync(store, router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [meta],
  render: h => h(App)
}).$mount('#app')
