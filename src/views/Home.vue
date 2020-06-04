<template>
  <div>
    <div class="home">
      <img alt="home page" src="../assets/images/bg_2.jpg" />
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
    <section>
      <div class="intro-info">
        <img alt="home page" src="../assets/images/bg_1.jpg" />
      </div>
      <div class="intro-info">
        <h3>Desire Meets A New Taste</h3>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. On her way she met a
          copy. The copy warned the Little Blind Text, that where it came from
          it would have been rewritten a thousand times and everything that was
          left from its origin would be the word "and" and the Little Blind Text
          should turn around and return to its own, safe country.
        </p>
      </div>
    </section>
    <h3>Our Delightful offerings</h3>
    <section>
      <div v-for="(category,index) in Categories.categories" :key="index" class="categories">
        <img alt="categories" src="../assets/images/kind-1.jpg" />
        <h4>{{category.categoryNm}}</h4>
      </div>
    </section>
    <BestSeller \>
  </div>
</template>

<script>
import BestSeller from "@/components/BestSeller.vue";
// import Contact from "@/components/Contact.vue";
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    BestSeller
  },
  created(){
    this.$store.dispatch("Categories/fetchProducts")
  },
  computed:{
    ...mapState(['Categories'])  //this is the module  name
  }
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
.sellPoint {
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
  background: linear-gradient(to right, #a80d1a, #8d0202);
  color: white;
}
.intro-info{
  width:50%;
  padding: 10px;
  box-sizing: border-box;
  
}
.intro-info img{
  height: 30em;
}
h3{
  text-align: center;
  color: #8d0202;
}
.categories{
  width: 25%;
  padding: 5px;
  box-sizing: border-box;
  
}
.categories img{
  width: 65%;
  border-radius: 50%;
  height: 170px;
  border: 2px #8d0202 solid;
  padding:10px;
  box-sizing: border-box;
}
</style>
