<template>
  <div class="form">
     <vaadin-text-field
        label="username"
        :value="newUser.username"
        @input="newUser.username = $event.target.value"
      ></vaadin-text-field>
      <vaadin-password-field
        label="password"
        :value="newUser.password"
        @input="newUser.password = $event.target.value"
      ></vaadin-password-field>
      <vaadin-button @click="addUser">Add</vaadin-button>
  </div>
</template>

<script>
import vaadinTextField from '@vaadin/text-field';
import vaadinPasswordField from '@vaadin/password-field';
import vaadinButton from '@vaadin/button';
import axios from 'axios';

export default {
  name: 'AddUserForm',
  components: {
    vaadinTextField,
    vaadinPasswordField,
    vaadinButton,
  },
  data() {
    return {
      newUser: {username: "", password: ""},
    }
  },  
  methods: {
    async addUser() {
      var token = localStorage.getItem("vue-token");
      var response = await axios.post('http://localhost:8081/user/', this.newUser, {headers: {
    authorization: 'Bearer ' + token}});
      var user = await response.data;
      this.newUser = user;
      console.log("user added and emitted: ", user)
      this.$emit('userAdded', user);
    }
  }

}
</script>

<style>

</style>