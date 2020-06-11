<template>
  <section>
    <div class="footer-box">
      <h4>Get to know us more</h4>
      <ul>
        <li><fa-icon :icon="['fab', 'facebook']" size="3x" /></li>
        <li><fa-icon :icon="['fab', 'twitter']" size="3x" /></li>
        <li><fa-icon :icon="['fab', 'instagram-square']" size="3x" /></li>
      </ul>
    </div>
    <div class="footer-box">
      <h4>Quick Links</h4>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Shop' }">Shop</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        <li><router-link :to="{ name: 'Cart' }">Cart</router-link></li>
      </ul>
    </div>
    <div class="footer-box">
      <h4>Have a Question?</h4>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.footer-box {
  width: 25%;
}
.footer-box li{
    list-style: none;
}
</style>
