<template class="container-fluid">
  <OnonClicker class="container-fluid"/>
</template>

<script>
import OnonClicker from './components/OnonClicker.vue'
import 'bootstrap/dist/css/bootstrap.css'


export default {
  name: 'App',
  components: {
    OnonClicker
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
