<template>
    <div class="navbar-item is-grid">
        <div>
            <a @click.prevent="removeProduct" class="delete is-small is-danger"></a>
        </div>
        <div>
            {{product.name}}
        </div>
        <div class="tags has-addons last">
            <a @click.prevent="updateQuantity('sub')" class="tag is-light">
                <fa icon="chevron-left"/>
            </a>
            <span class="tag is-white">{{product.quantity}}</span>
            <a @click.prevent="updateQuantity('add')" class="tag is-light">
                <fa icon="chevron-right"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            product: {
                required: true,
                type: Object
            }
        },

        methods: {
            removeProduct() {
                this.$store.dispatch('removeProduct', this.product.id);
            },
            updateQuantity(type) {
                this.$store.dispatch('updateQuantity', {id: this.product.id, type});
            }
        }
    }
</script>

<style scoped lang="scss">
    .delete.is-danger {
        background: #ff3860;

        &:hover {
            background: #a72841;
        }
    }

    .navbar-item.is-grid {
        font-size: 12px;
        white-space: normal;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 20px 1fr 80px;

        .last {
            justify-content: flex-end;
        }
    }

    .is-light:hover {
        background: #e8e8e8;
    }
</style>