<template>
    <div class="products-item">
        <h4>{{product_data.title}}</h4>
        <img v-bind:src=" require('../../assets/images/product-image/' + product_data.image) " alt="img">
        <p>{{product_data.text}}</p>
        <button>Заказать</button>
    </div>
</template>

<script>

    export default {
        name: "ProductsItem",
        props: {
            product_data: {
                type: Object,
                default() {
                    return{}
                }
            }
        }
    }
</script>

<style scoped>

</style>