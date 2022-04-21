<template>
  <div>
    <div class="header">UserList</div>
    <vaadin-grid :items.prop="users">
      <vaadin-grid-column path="username"></vaadin-grid-column>
      <vaadin-grid-column path="password"></vaadin-grid-column>
    </vaadin-grid>
  </div>
</template>

<script>
import axios from 'axios';
import vaadinGrid from '@vaadin/grid';

export default {
  name: 'UserList',
  components: {
    vaadinGrid,
  },
  props: {
  },
  data() {
    return {
      users: [{id: 0}, {}],
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
