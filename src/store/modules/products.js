import productServices from "@/services/productServices.js";
export const namespaced = true;

export const state = {
  categories: [],
  reviews: []
};
export const mutations = {
  GET_PRODUCTS(state, categories) {
    state.categories = categories;
  },
  GET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  }
};
export const actions = {
  fetchProducts({ commit }) {
    productServices.getProducts().then(response => {
      console.log(response.data);
      console.log("Total Categories are " + response.headers["x-total-count"]);
      commit("GET_PRODUCTS", response.data);
    });
  },
  fetchReviews({ commit }) {
    productServices.getReviews().then(response => {
      commit("GET_REVIEWS", response.data);
    });
  }
};
