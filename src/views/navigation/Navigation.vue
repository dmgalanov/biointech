<template>
    <div class="aside">
        <div class="left-navigation">
            <div class="navigation">
                <ul class="navigation__list">
                    <li class="navigation__item" v-for="({name, path}, index) in navigationMenuList" :key="index">
                        <router-link class="navigation__link" aria-current="page" :to="path">
                            {{name}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="info-links">button</div>
    </div>
</template>

<script>
    import {navigationList} from '../../constants/navigationLinks.js'
    export default{
        name: 'Navigation',
        props: {
            msg: String
        },
        data() {
            return {
                navigationMenuList: navigationList,
            }
        },
    }
</script>

<style lang="scss">
    .navigation__link {
        color: black;
    }
</style>