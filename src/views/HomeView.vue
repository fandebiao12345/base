<template>
  <div class="home">
    <router-link to="/app1">app1</router-link>
    <router-link to="/app2">app2</router-link>
    <div id="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
