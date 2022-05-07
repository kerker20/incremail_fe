import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import './axios'
import 'flowbite';
import store from './vuex';
import moment from 'vue-moment'

Vue.config.productionTip = false

new Vue({
  moment,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
