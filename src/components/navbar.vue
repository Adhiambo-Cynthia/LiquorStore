<template>
  <div id="nav" class="nav">
    <h1 class="brand">LIQUOR <span>STORE</span></h1>
    <nav class="pages">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Shop' }">Shop</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <router-link :to="{ name: 'Cart' }">Cart</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Codystar&display=swap');
.nav {
  height: 3.2em;
  padding: 10px;
  width: 98.5%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.959);
}
h1 {
  font-family: "Times New Roman", Times, serif;
  color: #fff;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px rgb(250, 139, 139), 0 0 13px #e60073,
      0 0 15px #e60073;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #eba4c7, 0 0 13px #fc88c2,
      0 0 15px #ce066a;
  }
}
span {
  font-family: "Codystar", cursive;
}
.pages {
  width: 40%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.pages a {
  font-weight: bold;
  color: rgb(134, 132, 132);
  text-decoration: none;
}
.pages a:hover {
  color: rgb(102, 4, 4);
  text-decoration: underline;
}

.pages a.router-link-exact-active {
  color: #f0eceb;
}
</style>
