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
    var response = await axios.post('http://localhost:8081/user/', this.newUser);
    var user = await response.data;
    this.newUser = user;
    }
  }

}
</script>

<style>

</style>