import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false;

let initOptions = {
  url: 'http://localhost:8000/auth', realm: 'djcollab-realm', clientId: 'djcollab-vue', onLoad:'login-required'
}

const keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad, promiseType: 'native'}).then((auth) =>{
    
    if(!auth) {
      window.location.reload();
    } else {
      console.log("authenticated")
    }
 
    new Vue({
      render: h => h(App),
      router: router,
    }).$mount("#app");
  

    console.log(keycloak)
    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(70).then((refreshed)=>{
        if (refreshed) {
          console.info('Token refreshed'+ refreshed);
          localStorage.setItem("vue-token", keycloak.token);
        } else {
          console.info('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }, ((error) => {
          console.error(error);
      }));


    }, 60000)

}, ((error) => {
  console.error(error);
}));