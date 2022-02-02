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
