<template>
  <div>
    <div class="header">UserList</div>
    <vaadin-grid :items.prop='users' :selectedItem.prop="selectedItem" v-on:active-item-changed="selectedItemChanged">
      <vaadin-grid-column path="username"></vaadin-grid-column>
      <vaadin-grid-column path="password"></vaadin-grid-column>
    </vaadin-grid>
    <vaadin-button @click="editUser">Edit</vaadin-button>
    <vaadin-button @click="deleteUser">Delete</vaadin-button>
    <div v-if="editing">
      <vaadin-text-field
        label="username"
        :value="selectedItem.username"
        @input="selectedItem.username = $event.target.value"
      ></vaadin-text-field>
      <vaadin-password-field
        label="password"
        :value="selectedItem.password"
        @input="selectedItem.password = $event.target.value"
      ></vaadin-password-field>
      <vaadin-button @click="UpdateUser">Send</vaadin-button>
      <vaadin-button @click="closeEditing">X</vaadin-button>
    </div>
    <p v-if="deleted">Succesfully deleted user!</p>  
  </div>
</template>

<script>
import vaadinGrid from '@vaadin/grid';
//import vaadinIcon from '@vaadin/icon';
import vaadinButton from '@vaadin/button';
import axios from 'axios';

export default {
  name: 'UserList',
  components: {
    vaadinGrid,
    //vaadinIcon,
    vaadinButton,
  },
  props: {
    users: Array,
  },
  data() {
    return {
      selectedItem: {id: 1, username: "SioravW", password: "boe123"},
      deleted: false,
      editing: false,
    }
  },
  methods: {
    selectedItemChanged(item) {
      console.log(item.detail.value);
      this.selectedItem = item.detail.value;
    },
    editUser(){
      this.editing = true;
    },
    closeEditing(){
      this.editing = false;
    },
    deleteUser(){
      this.deleteUserCall(this.selectedItem.id)
    },
    async deleteUserCall(userId) {
      var response = await axios.delete('http://localhost:8081/user/' + userId);
      var deleted = await response.data;
      this.deleted = deleted;
      if(deleted){
        //update users
      }
    },
    async UpdateUser() {
      var response = await axios.put('http://localhost:8081/user/' + this.selectedItem.id, this.selectedItem);
      var user = await response.data;
      this.selectedItem = user;
      this.editing = false;
      // update users
    }
  }
  
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
