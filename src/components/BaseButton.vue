<template>
  <div>
    <button v-on="$listeners" class="button" :class="buttonClass">
      <slot>SHOP NOW</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>

<style lang="css" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  margin-right: 15px;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button.-fill-gradient {
  background: linear-gradient(to right, #a80d1a, #8d0202);
  color: #ffffff;
}
</style>
