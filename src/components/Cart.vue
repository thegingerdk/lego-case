<template>

    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item">
            <b v-text="cart.quantity"></b> items in cart
        </a>

        <div class="navbar-dropdown is-right">
            <div v-if="cart.quantity !== 0">
                <cart-item  v-for="(product, index) in cart.products" :key="index" :product="product"/>
            </div>
            <div v-else class="navbar-item">You have not put anything in the cart yet!</div>

            <hr class="navbar-divider">
            <div class="navbar-item">Total: <b v-text="cart.total"></b> kr</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CartItem from "./CartItem";

    export default {
        name: "Cart",
        components: {CartItem},
        computed: {
            ...mapGetters(['cart'])
        }
    }
</script>

<style scoped lang="scss">
    b {
        margin: 0 5px;
    }

    .navbar-dropdown {
        width:400px;

        hr + .navbar-item {
            justify-content: flex-end;
        }
    }
</style>