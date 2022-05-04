import {createApp} from 'vue';
import App from './App.vue';
import UserPage from './pages/UserPage.vue';
import PlaylistPage from './pages/PlaylistPage.vue';
import VueRouter from 'vue-router';


const routes = [
  { path: '/', component: UserPage },
  { path: '/playlists', component: PlaylistPage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
.use(router)
.mount('#app')