<template>
    <header class="header">

        <popup
                v-if="isFormPopupVisible"
                @closePopup="closeFormPopup"
        />

        <div class="container">
            <div class="header__top">
                <a class="header__logo" href="/"><img src="../assets/images/icons/logo.svg" alt="logo"></a>
                <div class="header__connection">
                    <button class="header__button-form" @click="showPopup">Заказать звонок</button>
                    <a class="header__phone primary menu-nav" href="tel:+79531812343"><img src="../assets/images/icons/phone.svg" alt="phone">+7 953 181 23 43</a>
                </div>
            </div>
        </div>
        <div class="header__bg-color bg-color">
            <div class="header__menu main-menu container">
                <ul class="header__items main-menu__items">
                    <li class="header__item main-menu__item header-item" v-for="({name, path}, index) in headerMenuList" :key="index">
                        <router-link class="main-menu__link" aria-current="page" :to="path">
                            {{name}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import {menuList} from '../constants/menuLinks.js';
    import Popup from "./popup/popup";
    export default {
        name: 'Header',
        props: {
            msg: String,
            product_data: {
                type: Object,
                default() {
                    return{}
                }
            }
        },
        data() {
            return {
                headerMenuList: menuList,
                show: true,
                isFormPopupVisible: false,
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
