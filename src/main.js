import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TTable from './lib'
Vue.use(ElementUI)
Vue.use(TTable)

new Vue({
  el: '#app',
  render: h => h(App)
})
