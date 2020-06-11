<template>
    <div>
        <section>
            <div
        v-for="(review, index) in Shop.reviews"
        :key="index"
        class="review"
      >
      <h4>{{review.name}}</h4>
      <p>{{review.message}}</p>
      </div>
        </section>

    </div>
</template>

<script>
import { mapState} from 'vuex'
    export default {
        created() {
    this.$store.dispatch("Shop/fetchReviews");
  },
  computed: {
    ...mapState(["Shop"])
  }
    }
</script>

<style lang="css" scoped>
section{
    background-color: indianred;
    color: white;
}

.review{
    padding: 1opx;
    width: 25%;
    box-sizing: border-box;
    border: beige solid 2px;
    box-shadow: 5px 5px 10px grey;
}
</style>