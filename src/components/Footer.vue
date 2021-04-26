<template>
    <footer class="footer bg-color">
        <div class="footer__container container">
            <div class="footer__nav">
                <div class="footer__menu main-menu">
                    <ul class="footer__items main-menu__items">
                        <li class="main-menu__item" v-for="({name, path}, i) in footerMenu" :key="i">
                            <router-link class="main-menu__link" aria-current="page" :to="path">
                                {{name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <a class="footer__logo main-menu-nav" href="/"><img src="../assets/images/icons/logo_footer.svg" alt="logo"></a>
            </div>
            <div class="footer__contacts footer-contacts">
                <p class="contacts__phone">Тел.: +7 953 181 23 43</p>
                <p class="contacts__email">Email: 89531812343@mail.ru</p>
                <p class="contacts__address">Адрес: г.Ефремов, ул. Заводская, д 11, оф 1</p>
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
