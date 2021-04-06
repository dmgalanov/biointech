<template>
    <header class="header">
        <div class="container">
            <div class="header__top">
                <a class="header__logo" href="/"><img src="../assets/images/icons/logo.svg" alt="logo"></a>
                <a class="header__phone primary menu-nav" href="/contacts"><img src="../assets/images/icons/phone.svg" alt="phone">+7 999 999 99 99</a>
            </div>
        </div>
        <div class="header__bg-color bg-color">
            <div class="header__menu menu container">
                <ul class="header__items menu__items">
                    <li class="menu__item" v-for="({name, path}, index) in headerMenuList" :key="index">
                        <router-link class="menu__link" aria-current="page" :to="path">
                            {{name}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import {menuList} from '../constants/menuLinks.js'
    export default {
      name: 'Header',
      props: {
        msg: String
      },
      data() {
        return {
          headerMenuList: menuList,
        }
      },
    }
</script>
