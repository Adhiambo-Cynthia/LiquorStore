import Vue from "vue";
import Vuex from "vuex";
import * as Shop from '@/store/modules/products.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Shop
  },
  state: {},
  mutations: {},
  actions: {},
  
});
