<template>
  <div>
    <div
      v-for="product in category.products"
      :key="product.ID"
      class="products"
      v-show="isActive"
    >
    <div >
      <h4>{{ product.name }}</h4>
      <h4>{{ product.price }}</h4>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
    selected:{default: true}
  },
  data(){
    return{
      isActive:false
    }
  },
  mounted(){
    this.isActive=this.selected
  }
};
</script>

<style lang="css" scoped>
.products{
    display: flex;
    flex-wrap: wrap;
}
</style>
