<template>
    <div id="app" class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">The <b>Put Stuff In Cart</b> Shop</router-link>
            </div>

            <div class="navbar-end">
                <cart/>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    import cart from "./components/Cart";

    export default {
        name: 'app',
        components: {cart}
    }
</script>

<style lang="scss">

    * {
        font-family: 'Fira Code', monospace;
    }

    .navbar,
    body {
        background: #efefef;
    }

    .navbar-brand .navbar-item {
        font-family: 'Lobster', cursive;
        font-size: small;
        align-items: flex-end;
        display: flex;
        margin-top: -4px;
        margin-bottom: 7px;

        b {
            color: #42b983;
            font-size: xx-large;
            position: relative;
            top: 7px;
            margin: 0 5px;
        }
    }

    .navbar {
        border-bottom: 2px solid #4a4a4a;
    }
</style>
