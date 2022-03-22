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
    var parties = await axios.get('https://localhost:8081/party');
    this.parties.push(parties);
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
