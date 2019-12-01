import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

import App from '@/components/layout'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
