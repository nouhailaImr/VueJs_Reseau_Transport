<template>
<div class="auth-wrapper2">
    <div class="auth-inner">
<form id="signup-form" @submit.prevent="signupRequest">
    <div class="text-center mb-4">
        <h3>Créer un compte</h3>
    </div>
    <div class="form-group">
        <input type="text" id="first_name" v-model= "first_name" class="form-control from-control-lg" placeholder="Prenom">
    </div>
    <div class="form-group">
        <input type="text" id="last_name" v-model= "last_name" class="form-control from-control-lg" placeholder="Nom">
    </div>
    <div class="form-group">
        <input type="email" id="email" v-model= "email" class="form-control from-control-lg" placeholder="Adresse mail">
    </div>
    <div class="form-group">
    <input type="password" id="password" v-model="password" class="form-control from-control-lg" placeholder="Mot de passe">
    </div>
    <div class="form-group">
        <button v-if="! xhrRequest" class="btn btn-success btn-block "> S'inscrire </button>
        <button v-if="xhrRequest" class="btn btn-success btn-block">
            <span class="spinner-border spinner-border-sm"> </span>
                            Patienter ... 
         </button>

    </div>
    <div class="form-group ">
        <p class="text-center">Vous êtes déjà inscrits? <router-link to="/Login">S'authentifier</router-link></p>
    </div>
</form>
</div>
</div>


</template>

<script>
import firebase from "firebase"

export default {
    name : 'Signup',
    data(){
        return{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            xhrRequest: false
        }
    },
     methods: {
        signupRequest() {
            let v=this;
            v.xhrRequest = true;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                () => {
                    this.$router.replace('login');
                },
                ( err ) => {
                    v.xhrRequest = false;
                    alert(`Error - ${err.message}`);
                }
            );
        }
        }

}
</script>

<style scoped>
.btn-spn {
    position: relative;
    top: -3px;


}
</style>

