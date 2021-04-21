<template>
    <div class="products-item">

        <popup
                v-if="isFormPopupVisible"
                @closePopup="closeFormPopup"
        />

        <h4 class="products-item__title">{{product_data.title}}</h4>
        <img class="products-item__image" v-bind:src=" require('../../assets/images/product-image/' + product_data.image) " alt="img">
        <p class="products-item__text">{{product_data.text}}</p>
        <button class="products-item__button products-item-button" @click="showPopup"><span class="products-item-button__text products-item-button-text">Заказать звонок</span></button>
    </div>
</template>

<script>
    import Popup from "../../components/popup/popup";
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
        data() {
            return {
                isFormPopupVisible: false
            }
        },
        methods: {
            showPopup() {
                this.isFormPopupVisible = true;
            },
            closeFormPopup() {
                this.isFormPopupVisible = false;
            },
        },
        components: {
            Popup,
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
            font-size: 18px;
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
        margin: 40px 0;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        background-color: #818CEB;
        text-decoration: none;
        overflow: hidden;
        border-radius: 20px;
        letter-spacing: 2px;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 100%;
        box-shadow: 0 2px 0 #303555;
        transition: background-color 0.5s ease 0s;
        top: 0;

        &:hover {
            background-color: #5f68aa;
        }
        &:active {
            top: 3px;
            box-shadow: 0 0 0 #303555;
        }
    }
</style>