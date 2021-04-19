<template>
    <div class="products-item">
        <h4 class="products-item__title">{{product_data.title}}</h4>
        <img class="products-item__image" v-bind:src=" require('../../assets/images/product-image/' + product_data.image) " alt="img">
        <p class="products-item__text">{{product_data.text}}</p>
        <a href="/products" class="products-item__button products-item-button" @click="sendDataToParent"><span class="products-item-button__text products-item-button-text">Заказать звонок</span></a>
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
        },
        methods: {
            sendDataToParent() {
                this.$emit('sendArticle', this.product_data.article)
            }
        }
    }
</script>

<style lang="scss">
    .products-item {
        flex-basis: 46%;
        box-shadow: 0 0 8px 0 #818CEB;
        height: 600px;
        padding: 16px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        &__image {
            width: 300px;
        }
        &__title {
            font-size: 28px;
            text-transform: uppercase;
            text-align: center;
        }
        &__text {
            font-size: 14px;
            font-weight: 400;
            text-align: center;
        }
    }

    .products-item-button {
        width: 280px;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        background-color: #818CEB;
        text-decoration: none;
        overflow: hidden;
        border-radius: 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 100%;
        letter-spacing: 3px;

        .products-item-button-text {
            background:linear-gradient(#FFFFFF, #FFFFFF) 50% 100% no-repeat;
            background-size:0 2px;
            transition:background 250ms ease 0s;

        }

        &:hover .products-item-button-text {
            background-size:100% 2px;

        }
    }
</style>