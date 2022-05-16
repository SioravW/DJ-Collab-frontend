<template>
  <div id="Playlists">
    <AddPlaylistForm v-on:playlistAdded="playlistAdded" />
    <vaadin-grid :items.prop='playlists' :selectedItem.prop="selectedItem" v-on:active-item-changed="selectedItemChanged">
      <vaadin-grid-column path="name"></vaadin-grid-column>
      <vaadin-grid-column path="genre"></vaadin-grid-column>
      <vaadin-grid-column path="userName"></vaadin-grid-column>
    </vaadin-grid>
    <vaadin-button @click="editPlaylist">Edit</vaadin-button>
    <vaadin-button @click="deletePlaylist">Delete</vaadin-button>
    <div v-if="editing">
      <vaadin-text-field
        label="name"
        :value="selectedItem.name"
        @input="selectedItem.name = $event.target.value"
      ></vaadin-text-field>
      <vaadin-text-field
        label="genre"
        :value="selectedItem.genre"
        @input="selectedItem.genre = $event.target.value"
      ></vaadin-text-field>
      <vaadin-button @click="updatePlaylist">Send</vaadin-button>
      <vaadin-button @click="closeEditing">X</vaadin-button>
    </div>
    <p v-if="deleted">Succesfully deleted playlist!</p>  
  </div>
</template>

<script>
import vaadinGrid from '@vaadin/grid';
import axios from 'axios';
import AddPlaylistForm from '../components/AddPlaylistForm.vue';

export default {
  name: "Playlists",
  components: {
    vaadinGrid,
    AddPlaylistForm,

  },
  data() {
    return {
      playlists: [{name: "energy booster pop", genre: "pop"}, {name: "songs to sing in the shower", genre: "singalongs"}],
      selectedItem: {},
      deleted: false,
      editing: false,
    }
  },
  mounted() {
    this.getPlaylists();
  },
  methods: {
    selectedItemChanged(item){
      this.selectedItem = item.detail.value;
    },
    async getPlaylists(){
      var response = await axios.get('http://localhost:8082/playlist');
      var playlists = await response.data;
      this.playlists = playlists;
    },
    playlistAdded(playlist) {
      console.log(playlist);
      this.users = [...this.playlists, playlist]
      console.log("updated userList: ", this.playlists);
    },
    
    editPlaylist(){
      this.editing = true;
    },
    closeEditing(){
      this.editing = false;
    },
    deletePlaylist(){
      this.deletePlaylistCall(this.selectedItem.id)
    },
    async deletePlaylistCall(playlistId) {
      var response = await axios.delete('http://localhost:8082/playlist/' + playlistId);
      var deleted = await response.data;
      this.deleted = deleted;
      if(deleted){
        //update users
      }
    },
    async updatePlaylist() {
      this.selectedItem.genre = this.selectedItem.genre.toUpperCase();
      var response = await axios.put('http://localhost:8082/playlist/', this.selectedItem);
      var playlist = await response.data;
      this.selectedItem = playlist;
      this.editing = false;
      // update users
    }
  },
}
</script>

<style>

</style>