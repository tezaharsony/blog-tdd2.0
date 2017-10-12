// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueTinymce from '@deveodk/vue-tinymce'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import '@deveodk/vue-tinymce/dist/@deveodk/vue-tinymce.css'

Vue.use(vueTinymce)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
