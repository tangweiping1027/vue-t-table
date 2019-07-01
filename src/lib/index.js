<<<<<<< HEAD
import TTable from './src'
import tDialog from './src/tDialog.vue'
=======
import TUniversalLayout from './src/TUniversalLayout.vue'
import TDialog from './src/TDialog.vue'
import TFormItem from './src/TFormItem.vue'
import TPage from './src/TPage.vue'
import TTable from './src/TTable.vue'
>>>>>>> 2e7abaf7e6f1f982a8b1903668e10561afb780a1

TTable.install = function(Vue) {
  Vue.component(TUniversalLayout.name, TUniversalLayout)
  Vue.component(TDialog.name, TDialog)
  Vue.component(TFormItem.name, TFormItem)
  Vue.component(TPage.name, TPage)
  Vue.component(TTable.name, TTable)
  Vue.component(tDialog.name, tDialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TUniversalLayout)
  window.Vue.use(TDialog)
  window.Vue.use(TFormItem)
  window.Vue.use(TPage)
  window.Vue.use(TTable)
  window.Vue.use(tDialog)
}

export default TTable
