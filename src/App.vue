<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
*{
  box-sizing: border-box;
}
body{
  background-image: url('./assets/3.jpg');
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
