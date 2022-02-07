<template>
<div class="auth-wrapper2">
    <div class="auth-inner">
<form id="signup-form" style="font-family: 'Fira Sans'" @submit.prevent="signupRequest">
    <div class="text-center  mb-4">
        <h3>Créer un compte</h3>
    </div>
    <div class="form-group mb-3">
        <input type="text"  id="first_name" v-model= "first_name" class="form-control form-control-sm" placeholder="Prenom">
    </div>
    <div class="form-group mb-3">
        <input type="text" id="last_name" v-model= "last_name" class="form-control form-control-sm" placeholder="Nom">
    </div>
    <div class="form-group mb-3">
        <input type="email" id="email" v-model= "email" class="form-control form-control-sm" placeholder="Adresse mail">
    </div>
    <div class="form-group mb-3">
    <input type="password" id="password" v-model="password" class="form-control form-control-sm" placeholder="Mot de passe">
    </div>
    <div class="form-group d-grid mb-3">
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
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
*{
  box-sizing: border-box;
}
body{
background-image: url('../assets/3.jpg');
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans',sans-serif;
}
h1,h2,h3,h4,h5,h6,label,span {
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
}
.custom-control-label{
  font-weight: 400;
}

body, html, #app{
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}


.auth-wrapper {
  display: flex;
  float: left;
  justify-content: center;
  flex-direction: column;
  text-align: left;

}
.auth-wrapper2 {
  display: flex;
  float: right;
  justify-content: center;
  flex-direction: column;
  text-align: left;

}
.auth-inner{
  background-color: rgba(45, 49, 45, 0.7);
  color: white;
  height: 100vh;
  box-shadow: 0px 14px 80px rgba(34,35, 58,0.2);
  padding: 45px 45px 40px 50px;
  transition: all .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
}
#login-form, #signup-form{
  width: 100%;
}

.auth-wrapper:focus {
  border-color: #167bff;
  box-shadow: none;
}
.btn-spn {
    position: relative;
    top: -3px;


}

</style>

