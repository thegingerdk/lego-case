<template>
    <section class="home section">
        <div class="container-fluid">
            <div class="grid">

              <product v-for="product in products" :key="product.id" :product="product" />

            </div>
        </div>
    </section>
</template>

<script>

    import {mapGetters} from 'vuex'
    import Product from "../components/Product";

    export default {
        name: 'home',
      components: {Product},
      computed: {
            ...mapGetters(['products'])
        }
    }
</script>


<style scoped lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        justify-content: center;
        align-items: center;


        @media screen and (min-width: 769px) and (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 25px;
        }
        @media screen and (min-width: 1025px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media screen and (min-width: 1414px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

</style>