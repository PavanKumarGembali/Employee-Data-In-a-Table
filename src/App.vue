<template>
  <div class="main">
    <TableComponent/>
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue'
import store from './store.js'

export default {
  name: 'App',
  components: {
    TableComponent
  },
  store
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
