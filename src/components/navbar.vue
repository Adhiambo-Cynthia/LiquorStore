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
.nav {
  height: 3em;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
h1 {
  font-family: "Times New Roman", Times, serif;
}
span {
  color: rgb(102, 4, 4);
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
  color: black;
  text-decoration: none;
}
.pages a:hover {
  color: rgb(102, 4, 4);
  text-decoration: underline;
}

.pages a.router-link-exact-active {
  color: #680401;
}
</style>
