<template>
  <div id="app">
    <AddUserForm />
    <UserList v-bind:users="users" />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import AddUserForm from './components/AddUserForm.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AddUserForm,
    UserList
  },
  data() {
    return {
      users: [],
    }
  },  
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
    var response = await axios.get('http://localhost:8081/user/all');
    var users = await response.data;
    this.users = users;
    }
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
