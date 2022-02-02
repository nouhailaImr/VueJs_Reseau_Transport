<template>
    <nav class="navbar navbar-expand navbar-light ">
    <div class="container py-4">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button @click="handleLogout()" class="btn btn-secondary">Se déconnecter</button>
        </li>
      </ul>
    </div>
    </div>
  </nav> 
</template>

<script>
import firebase from 'firebase'
import router from '../router/index'

export default {
  name : 'Nav',
  methods: {
    handleLogout: () => {
      firebase.auth().signOut();
      router.push('/login');
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
