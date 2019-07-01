<template>
  <div id="app">
    <t-table :columns="columns" border :data="data"></t-table>
    <t-dialog ref="dialog"></t-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      columns: [
        {
          label: '啊啊',
          value: 'aaa'
        },
        {
          label: 'bbb',
          value: 'bbb'
        },
        {
          label: '操作',
          btns: [
            {
              name: '编辑',
              icon: 'el-icon-edit-outline',
              fn(val) {
                this.$refs.dialog.$dialog({
                  title: '添加',
                  width: '500px',
                  visible: true
                  // component: () => import('./lib/src/aa')
                })
              }
            }
          ]
        }
      ],
      data: [
        {
          aaa: '111',
          bbb: '222'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
