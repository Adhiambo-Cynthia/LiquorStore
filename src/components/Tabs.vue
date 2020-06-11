<template>
  <div>
    <div v-for="(category, index) in categories" :key="index" >
      <h4 @click="selectCategory(category)">{{ category.categoryNm }}</h4>
      <div>
      <Products :category="category" />
      </div>
    </div>
    

    
  </div>
</template>

<script>
import Products from "@/components/products.vue";
export default {
    components:{
        Products
    },
  props: {
    categories: Array
  },
  methods:{
      selectCategory(selectedTab){
          this.categories.forEach(category=>{
              category.isActive= category.categoryNm===selectedTab.categoryNm
          })
      }
      
  }
};
</script>

<style lang="css" scoped>
h4{
    cursor:pointer;
}
</style>
