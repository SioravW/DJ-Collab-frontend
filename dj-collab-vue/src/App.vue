<template>
  <div id="app">
    <PartyList />
  </div>
</template>

<script>
import PartyList from './components/PartyList.vue'

export default {
  name: 'App',
  components: {
    PartyList
  }
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
