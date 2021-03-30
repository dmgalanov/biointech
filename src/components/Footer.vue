<template>
    <footer class="footer bg-color">
        <div class="footer__container container">
            <div class="footer__nav">
                <div class="footer__menu menu">
                    <ul class="footer__items menu__items">
                        <li class="menu__item" v-for="({name, path}, i) in footerMenu" :key="i">
                            <router-link class="nemu__link" aria-current="page" :to="path">
                                {{name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <a class="footer__logo" href="/"><img src="../assets/images/icons/logo_footer.svg" alt="logo"></a>
            </div>
            <div class="footer__contacts contacts">
                <p class="contacts__phone">Тел.: +7 999 999 99 99</p>
                <p class="contacts__email">Email: Biointech@gmail.com</p>
                <p class="contacts__address">Адрес: 000000, Тула, ул.Тульская, 1</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import {menuList} from '../constants/menuLinks.js'
    export default {
        data() {
            return {
                footerMenu: menuList,
            }
        },
    }
</script>
