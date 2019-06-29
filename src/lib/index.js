import TUniversalLayout from './src/TUniversalLayout.vue'
import TDialog from './src/TDialog.vue'
import TFormItem from './src/TFormItem.vue'
import TPage from './src/TPage.vue'
import TTable from './src/TTable.vue'

TTable.install = function(Vue) {
  Vue.component(TUniversalLayout.name, TUniversalLayout)
  Vue.component(TDialog.name, TDialog)
  Vue.component(TFormItem.name, TFormItem)
  Vue.component(TPage.name, TPage)
  Vue.component(TTable.name, TTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TUniversalLayout)
  window.Vue.use(TDialog)
  window.Vue.use(TFormItem)
  window.Vue.use(TPage)
  window.Vue.use(TTable)
}

export default TTable
