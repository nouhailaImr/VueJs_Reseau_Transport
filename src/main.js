import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from './store/store.js'


Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyB0-6drDoEvdriq76L7Bicb9Hm_8bwAJcE",
  authDomain: "reseau-transport.firebaseapp.com",
  projectId: "reseau-transport",
  storageBucket: "reseau-transport.appspot.com",
  messagingSenderId: "733006141828",
  appId: "1:733006141828:web:9d0482c2c8a96773a125d1",
  measurementId: "G-FE7Q5K1LTN"
};


firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({

  el:'#app',
  store,
  router,
  render: h => h(App)

})




