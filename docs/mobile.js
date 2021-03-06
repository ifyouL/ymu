import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/main.scss'
import './assets/global.scss'
require('ymuicon/dist/style.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
