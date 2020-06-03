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
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Dancing+Script:wght@700&family=Fredericka+the+Great&family=Tenali+Ramakrishna&display=swap');
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
h2{
  font-family: 'Fredericka the Great', cursive;
}
h3{
  font-family: 'Cookie', cursive;
  font-size: 3em;
}


</style>
