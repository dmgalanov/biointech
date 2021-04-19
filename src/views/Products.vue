<template>
    <MainContainer>
        <div class="products">
            <products-item
                v-for="product in products"
                :key="product.article"
                v-bind:product_data="product"
                @sendArticle="sendChildArticle"
            />
        </div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    import {productsList} from "../constants/productsItemDb";
    import ProductsItem from "./products/ProductsItem";
    /*import NavigationButton from "../components/NavigationButton";*/
    
    export default{
        name: 'Products',
        data() {
            return {
                active: 'one',
                products: productsList
            }
        },

        components: {
            MainContainer,
            ProductsItem,
            /*NavigationButton*/
        },
        methods: {
            sendChildArticle(data) {
                console.log(data)
            }
        }
    }
</script>

<style lang="scss">
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
    }
</style>