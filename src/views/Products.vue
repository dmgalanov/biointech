<template>
    <MainContainer>
        <div class="products">
            <h1 class="products__title">наша продукция</h1>
            <div class="products__item">
                <products-item
                        v-for="product in products"
                        :key="product.article"
                        v-bind:product_data="product"
                        @sendArticle="sendChildArticle"
                />
            </div>
        </div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    import {productsList} from "../constants/productsItemDb";
    import ProductsItem from "../components/ProductsItem";

    
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
