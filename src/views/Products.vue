<template>
    <MainContainer>
        <div class="navigation-container">
            <div>
                <div class="navigation-container__left-navigation">
                    <navigation-button :color="active === 'one' ? 'bgColor' : ''" @action="active = 'one'">Выпарные установки</navigation-button>
                    <navigation-button :color="active === 'two' ? 'bgColor' : ''" @action="active = 'two'">Установки для упаривания и кристализации</navigation-button>
                    <navigation-button :color="active === 'three' ? 'bgColor' : ''" @action="active = 'three'">Установки мембранной фильтрации</navigation-button>
                    <navigation-button :color="active === 'four' ? 'bgColor' : ''" @action="active = 'three'">Установки для плазмолиза</navigation-button>
                    <navigation-button :color="active === 'five' ? 'bgColor' : ''" @action="active = 'three'">Пилотные сушильные установки</navigation-button>
                    <navigation-button :color="active === 'six' ? 'bgColor' : ''" @action="active = 'three'">Биофильтрационные установки</navigation-button>
                    <navigation-button :color="active === 'seven' ? 'bgColor' : ''" @action="active = 'three'">Ферментационные установки</navigation-button>
                    <navigation-button :color="active === 'eight' ? 'bgColor' : ''" @action="active = 'three'">Установки непрерывной стерелизации жидких сред</navigation-button>
                </div>
                <div class="button"><a href="/products"><span class="button__container">Каталог</span></a></div>
            </div>
            <div class="navigation-container__right navigation-container-right">
                <products-item
                    v-for="product in products"
                    :key="product.article"
                    v-bind:product_data="product"
                />
            </div>
        </div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    import {productsList} from "../constants/productsItemDb";
    import ProductsItem from "./products/ProductsItem";
    import NavigationButton from "../components/NavigationButton";
    
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
            NavigationButton
        },
    }
</script>

<style scoped>

</style>