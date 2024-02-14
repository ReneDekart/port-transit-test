import Vue from 'vue'
import App from './App.vue'
import router from '@/core/router'
import store from '@/core/store'
import vueMoment from 'vue-moment'
import API from '@/core/api.plugin'
import UTILS from '@/core/utils.plugin'
import Clipboard from 'v-clipboard'
import * as Components from '@/components/'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import '@/assets/main.scss'

Vue.use(vueMoment)
Vue.use(Clipboard)
Vue.use(API)
Vue.use(UTILS)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Object.keys(Components).forEach(name => Vue.component(name, Components[name]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
