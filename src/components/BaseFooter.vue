<template>
  <div>
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
        <h4>
          <fa-icon :icon="['fas', 'info-circle']" size="1x" /> Have a Question?
        </h4>
        <ul>
          <li><fa-icon :icon="['fas', 'phone-alt']" size="2x" /></li>
          <li><fa-icon :icon="['fas', 'envelope']" size="2x" /></li>
        </ul>
      </div>
      <div class="footer-box">
        <h4>Where we are located.</h4>
        <p>Thika Road...</p>
      </div>
    </section>
    <div id="copyright">
      <p> Copyright 2020 Cynthia Adhiambo</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
section{
  background-color: rgb(211, 207, 207);
}
.footer-box {
  width: 25%;
}
.footer-box li {
  list-style: none;
}
#copyright{
  background-color: grey;
  color: white;
  padding-top: 5px;
}
</style>
