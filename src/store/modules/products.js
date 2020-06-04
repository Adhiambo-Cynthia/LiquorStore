import productServices from "@/services/productServices.js";
export const namespaced = true;

export const state ={
    categories:[]
}
export const mutations={
    GET_PRODUCTS(state, categories){
        state.categories=categories
    }
}
export const actions={
    fetchProducts({commit}){
        productServices.getProducts()
        .then(response=>{
            console.log(response.data)
            console.log("Total Categories are " + response.headers["x-total-count"])
            commit("GET_PRODUCTS", response.data)
        })
    }
}