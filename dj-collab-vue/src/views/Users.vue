<template>
  <div id="Users">
    <AddUserForm v-on:userAdded="userAdded" />
    <UserList v-bind:users="users" />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue';
import AddUserForm from '../components/AddUserForm.vue';
import axios from 'axios';

export default {
  name: 'Users',
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
    var response = await axios.get('http://localhost:8081/user/');
    var users = await response.data;
    this.users = users;
    },
    userAdded(user) {
      console.log(user);
      this.users = [...this.users, user]
      console.log("updated userList: ", this.users);
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
