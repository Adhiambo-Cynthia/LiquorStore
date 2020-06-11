<template>
  <div>
    <div
      v-for="product in category.products"
      :key="product.ID"
      class="products"
    >
      <h4>{{ product.name }}</h4>
      <h4>{{ product.price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
};
</script>

<style lang="css" scoped>
.products{
    display: flex;
    flex-wrap: wrap;
}
</style>
