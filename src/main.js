import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/index'
import Loading from '@/components/Loading';
Vue.component('loading',Loading)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
