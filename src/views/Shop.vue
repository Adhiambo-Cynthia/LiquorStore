<template>
  <div>
    <section>
      <div
        v-for="(category, index) in Shop.categories"
        :key="index"
        class="categories"
      >
        <h4>{{ category.categoryNm }}</h4>
      </div>
      <Products :category="category" />
    </section>
    <BaseReviews />
  
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import Products from "@/components/products.vue";
export default {
  components:{
    Products
  },
  created() {
    this.$store.dispatch("Shop/fetchProducts");
  },
  computed: {
    ...mapState(["Shop"])
  }
};
</script>

<style lang="css" scoped>
.categories{
  
}
</style>
