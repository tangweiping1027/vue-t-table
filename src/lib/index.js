import TTable from './src'

TTable.install = function(Vue) {
  Vue.component(TTable.name, TTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TTable)
}

export default TTable
