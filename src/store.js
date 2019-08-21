import Vue from 'vue'
import Vuex from 'vuex'

import data from './data/products';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: data,
        cart: {
            products: [],
            quantity: 0,
            total: 0
        },
        indexOfProduct: (state, id) => {
            return state.cart.products.map(function (e) {
                return e.id;
            }).indexOf(id);
        }
    },
    getters: {
        products: state => state.products.data,
        cart: state => state.cart,
    },
    mutations: {
        addToCart(state, product) {

            let indexOfProduct = state.indexOfProduct(state, product.id);

            if (indexOfProduct === -1) state.cart.products.push({...product, quantity: 1, total: product.price});
            else {
                let q = ++state.cart.products[indexOfProduct].quantity;
                state.cart.products[indexOfProduct].total = product.price * q;
            }
        },
        removeFromCart(state, id) {
            let indexOfProduct = state.indexOfProduct(state, id);
            state.cart.products.splice(indexOfProduct, 1);
        },
        updateQuantity(state, {id, type}) {
            let indexOfProduct = state.indexOfProduct(state, id);

            let q = type === 'add' ?
                ++state.cart.products[indexOfProduct].quantity :
                --state.cart.products[indexOfProduct].quantity;

            if (q === 0) state.cart.products.splice(indexOfProduct, 1);
            else {
                state.cart.products[indexOfProduct].total = state.cart.products[indexOfProduct].price * q;
            }
        },
        updateCart(state) {
            state.cart.quantity = state.cart.products.reduce((total, product) => total + product.quantity, 0);
            state.cart.total = state.cart.products.reduce((total, product) => total + product.total, 0);
        }
    },
    actions: {
        addToCart({commit}, product) {
            commit('addToCart', product);
            commit('updateCart');
        },
        removeProduct({commit}, id) {
            commit('removeFromCart', id);
            commit('updateCart');
        },
        updateQuantity({commit}, {id, type}) {
            commit(`updateQuantity`, {id, type});
            commit('updateCart');
        }
    }
})
