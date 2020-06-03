<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/images/bg_2.jpg" />
      <div class="tagline">
        <h2>Good Drinks equals<span> Good Moments</span></h2>
        <BaseButton buttonClass="-fill-gradient"></BaseButton>
      </div>
    </div>
    <section>
      <div class="sellPoint">
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
      <div class="sellPoint">
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
      <div class="sellPoint">
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
      <div class="sellPoint">
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Jacques+Francois+Shadow&display=swap");
.home {
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
}
.tagline {
  font-size: 2.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Courgette", cursive;
}
span {
  font-family: "Jacques Francois Shadow", cursive;
}
img {
  width: 100%;
  height: 40em;
}
.sellPoint{
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
  background: linear-gradient(to right, #a80d1a, #8d0202);
  color: white;
}
</style>
