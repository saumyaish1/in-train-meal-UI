<template>
  <div id="app">
    <MainMenu />
    <HelloWorld msg="Welcome to the vue app home"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/nav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
