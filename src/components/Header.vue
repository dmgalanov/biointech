<template>
    <header class="header">
        <div class="container">
            <div class="header__top">
                <a class="header__logo" href="/"><img src="../assets/images/icons/logo.svg" alt="logo"></a>
                <a class="header__phone primary menu-nav" href="/contacts"><img src="../assets/images/icons/phone.svg" alt="phone">+7 953 181 23 43</a>
            </div>
        </div>
        <div class="header__bg-color bg-color">
            <div class="header__menu main-menu container">
                <transition class="phone-menu" name="fade" mode="out-in">
                    <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
                    <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
                </transition>
                <transition name="fade">
                    <ul class="header__items main-menu__items" v-if="show">
                        <li class="header__item main-menu__item" v-for="({name, path}, index) in headerMenuList" :key="index">
                            <router-link class="main-menu__link" aria-current="page" :to="path">
                                {{name}}
                            </router-link>
                        </li>
                    </ul>
                </transition>
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
          show: false,
        }
      },
    }
</script>
