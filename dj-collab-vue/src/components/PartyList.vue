<template>
  <div>
    <li v-for="party in parties" v-bind:key="party.id">{{ party.name }}</li>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PartyList',
  props: {
  },
  data() {
    return {
      parties: [{id: 0}, {}],
    }
  },
  mounted() {
    this.getParty();
  },
  methods: {
    async getParty() {
    var response = await axios.get('http://localhost:8081/party');
    var parties = await response.data;
    this.parties = parties;
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
