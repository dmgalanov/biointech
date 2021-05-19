<template>
    <div class="products-item">

        <popup
                v-if="isFormPopupVisible"
                @closePopup="closeFormPopup"
        />

        <h4 class="products-item__title">{{product_data.title}}</h4>
        <img class="products-item__image" v-bind:src=" require('../assets/images/product-image/' + product_data.image) " alt="img">
        <p class="products-item__text">{{product_data.text}}</p>
        <button class="products-item__button products-item-button"
                @click="showPopup">
            <span class="products-item-button__text products-item-button-text">
                Заказать звонок
            </span>
        </button>
    </div>
</template>

<script>
    import Popup from "./popup/popup";
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
