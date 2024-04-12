<template>
  <div id="app">
    <router-link to="/app1">app1</router-link>
    <img  src="www.dsdsa.das"/>
    <router-link to="/app2">app2</router-link>
    <button @click="setToken"  class="home">设置token</button>
    <keep-alive>
      <div id="container"></div>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    methods: {
      setToken() {
        // window.a = 200
      // this.$action.setGlobalState({token: 1})
        console.log(this.$util)
    }
    }
  }
</script>

<style>
.home{
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
