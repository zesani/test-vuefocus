import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: ['VueFocus.mixin'],
  template: '<App/>',
  components: { App }
})
