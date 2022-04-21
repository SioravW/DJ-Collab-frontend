<template>
  <div id="app">
    <AddUserForm />
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import AddUserForm from './components/AddUserForm.vue';

export default {
  name: 'App',
  components: {
    AddUserForm,
    UserList
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
}

.header {
  background: lightgray;
}
</style>
