<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Authenticate</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
          <a class="nav-link" href="#">Register</a>

        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default{
  mounted(){
    this.$store.commit('initializeStore');
    console.log(this.$store.state.isAuthenticated);

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100vh;
  background-color: #1f1f1f;
  position: relative;   justify-content: center; align-items: center;
}
@media only screen and (max-width: 600px){
  #app{
    height: 100%;
    background-size: 100% 100%;
  }
}

</style>
