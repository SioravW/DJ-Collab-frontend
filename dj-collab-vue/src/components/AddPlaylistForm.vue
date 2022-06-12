<template>
  <div class="form">
     <vaadin-text-field
        label="name"
        :value="newPlaylist.name"
        @input="newPlaylist.name = $event.target.value"
      ></vaadin-text-field>
      <vaadin-text-field
        label="genre"
        :value="newPlaylist.genre"
        @input="newPlaylist.genre = $event.target.value"
      ></vaadin-text-field>
      <vaadin-button @click="addPlaylist">Add</vaadin-button>
  </div>
</template>

<script>
import vaadinTextField from '@vaadin/text-field';
import vaadinButton from '@vaadin/button';
import axios from 'axios';

export default {
  name: 'AddUserForm',
  components: {
    vaadinTextField,
    vaadinButton,
  },
  data() {
    return {
      newPlaylist: {name: "", genre: ""},
    }
  },  
  methods: {
    async addPlaylist() {
      var token = localStorage.getItem("vue-token");
      this.newPlaylist.genre = this.newPlaylist.genre.toUpperCase();
      var response = await axios.post('http://localhost:8082/playlist/', this.newPlaylist, {headers: {
    authorization: 'Bearer ' + token}});
      var playlist = await response.data;
      this.newPlaylist = playlist;
      console.log("playlist added and emitted: ", playlist)
      this.$emit('playlistAdded', playlist);
    }
  }

}
</script>

<style>

</style>