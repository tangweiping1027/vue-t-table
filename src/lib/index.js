import TTable from './src'
import tDialog from './src/tDialog.vue'

TTable.install = function(Vue) {
  Vue.component(TTable.name, TTable)
  Vue.component(tDialog.name, tDialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TTable)
  window.Vue.use(tDialog)
}

export default TTable
