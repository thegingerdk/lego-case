<template>
    <article class="product card" @click="addToCart">
        <header class="card-image">
            <figure class="image">
                <img :src="image" alt="Placeholder image">
            </figure>
        </header>

        <section class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="subtitle" v-text="product.vendor"></p>
                    <p class="title" v-text="product.name"></p>
                </div>
            </div>

            <button class="add-button">
                <fa icon="cart-plus"/>
            </button>

            <div class="content">
                <b v-text="product.price"></b> kr.
            </div>
        </section>
    </article>
</template>

<script>
    export default {
        name: "Product",
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        computed: {
            image() {
                return `/img/products/${this.product.image}`;
            }
        },
        methods: {
            addToCart (){
                this.$store.dispatch('addToCart', this.product)
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        border-radius: 6px;
        border: 0;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .15);
        transition: all cubic-bezier(.5, .05, .56, .85) 150ms;
        cursor: pointer;

        &:hover {
            transform: translateY(-15px);
            box-shadow: 0 18px 15px rgba(0, 0, 0, .15);

            .add-button {
                color: #42b983;
                transform: translateY(20px);
            }

            .card-image {

                img {
                    transform:scale(1.1);
                }
            }
        }
    }

    .media-content {
        text-align: center;
        height: 60px;

        .subtitle {
            font-weight: 900;
            font-size: 12px;
        }

        .title {
            font-weight: 300;
            font-size: 16px;
        }
    }

    .card-image {
        figure {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 260px;
        }

        img {
            width: 150px;
            transition: all cubic-bezier(.5, .05, .56, .85) 150ms;
        }
    }

    .card-content .content {
        text-align: center;
        font-size: 12px;

        b {
            font-size: 18px;
            color: hsl(204, 86%, 53%);
        }
    }

    .add-button {
        position: absolute;
        top: 50px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        border-radius: 40px;
        cursor: pointer;
        border: 0;
        font-size: 20px;
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        background: transparent;
        transition: transform , color;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(.5, .05, .56, .85);
        transform: translateY(10px);
    }
</style>