import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import './axios'
import 'flowbite';
import store from './vuex';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
