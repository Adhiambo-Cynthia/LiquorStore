<template>
  <div>
    <Tabs :categories="Shop.categories">
      
    </Tabs>
    <BaseReviews  />
  
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import Tabs from "@/components/Tabs.vue";

export default {
  components:{
    Tabs,
  
  
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
  margin: 10px;
  border: black 1px solid;
}
</style>
