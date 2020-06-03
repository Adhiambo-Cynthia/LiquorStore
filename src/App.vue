<template>
  <div id="app">
    <navbar />
    <!-- <Notificationcont /> -->
    <!-- <router-view :key="$route.fullPath" /> -->
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue"
export default {
  components:{
    navbar
  }
}
</script>

<style>
#app {
  width: 98%;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
section{
  display:flex;
  flex-wrap: wrap;
}

</style>
