<template>
  <div id="app">
    fdsa
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
        }
      ],
      data: [
        {
          aaa: '111',
          bbb: '222'
        }
      ]
    }
  },
  mounted() {
    this.$refs.dialog({
      title: '添加',
      widht: '500px',
      component: () => import('./add.vue')
    })
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
