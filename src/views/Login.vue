<template>
 <div class="auth-wrapper bg-gray">
    <div class="auth-inner">
      <form id="login-form" @submit.prevent="loginUser">
        <div class="form-group">
          <div class="text-center mb-4">
            <h2>Bienvenue à la modélisation du réseau de transport
              <br> sur TANGER
            </h2>
          </div>
          <div v-if="err" class="alert alert-danger" role="alert">
            {{ err }}
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="email" class="form-control" v-model="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="password" v-model="password" class="form-control" placeholder="Password" />
          </div>
          <div class="form-group">
            <button v-if="!xhrRequest" class="btn btn-success btn-block">
              Connexion
            </button>
            <button v-if="xhrRequest" class="btn btn-success btn-block">
              <span class="spinner-border spinner-border-sm"> </span>
              Patienter ...
            </button>
          </div>
          <div class="form-group">
            <p class="text-center">Vous n'avez pas de compte ?<router-link to="/register">S'inscrire</router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
     
  </div>
 

</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      err: "",
      email: "",
      password: "",
      xhrRequest: false,
    };
  },
  methods: {
    loginUser() {
      let v = this;
      v.xhrRequest = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            v.xhrRequest = false;
            this.$router.replace("/");
          },
          (error) => {
            v.xhrRequest = false;
            this.err = `Error - ${error.message}`;
          }
        );
    },
  },
};
</script>
<style scoped>

body{
  
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
</style>

