<template>
    <div style="width:20%; height:100vh; position: fixed" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="me-2" style="font-size: 2em;">
                <i class="fas fa-road"></i>
            </span>
            <span class="fs-5">Gestion des Routes</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page" v-on:click='dirMap()'>
                    <span class="me-2">
                        <i class="bi bi-house-fill"></i>
                    </span>
                    Accueil
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white" v-on:click='dirDistance()'>
                    <span class="me-2">
                        <i class="bi bi-activity"></i>
                    </span>
                    Indice de distance
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white" v-on:click='dirGlobal()'>
                    <span class="me-2">
                        <i class="bi bi-gear-fill"></i>
                    </span>
                    Indice globaux
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white" v-on:click='dirPosition()'>
                    <span class="me-2">
                        <i class="bi bi-gear-fill"></i>
                    </span>
                    Indice de position
                </a>
            </li>
        </ul>
        <hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>Admin</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#" @click="handleLogout()" >Sign out</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'
import router from '../router/index'

export default {
  name: 'SideBanner',
  props: {
    
  },
  methods:{
    handleLogout: () => {
      firebase.auth().signOut();
      router.push('/login');
    },

    dirMap(){
        this.$store.commit("gotoMap");
    },
    dirDistance(){
        this.$store.commit("gotoDistance");
    },
    dirGlobal(){
        this.$store.commit("gotoGlobal");
    },
    dirPosition(){
        this.$store.commit("gotoPosition");
    }
  },
  beforeMount: () => {
    if ( !firebase.auth().currentUser ) {
      console.log(("Vous n'êtes pas autorisé à accéder à cette interface."));
      router.push('/login');
    }
    else{
      console.log('Bien authentifié');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
