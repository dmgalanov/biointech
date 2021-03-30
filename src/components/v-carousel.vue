<template>
    <div class="carousel-conteiner">
        <div class="prev"><button class="carousel-conteiner__button" @click="prevSlide"><img src="../assets/images/icons/prev.png" alt=""></button></div>
        <div class="wrapper">
            <div class="v-carousel" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
                <v-carousel-item
                        v-for="item in carousel_data"
                        :key="item.id"
                        :item_data="item"
                />
            </div>
        </div>
        <div class="next"><button class="carousel-conteiner__button" @click="nextSlide"><img src="../assets/images/icons/next.svg" alt=""></button></div>
    </div>
</template>

<script>
    import vCarouselItem from './v-carousel-item'

    export default {
        name: "v-carousel",
        components: {
            vCarouselItem
        },
        props: {
            carousel_data: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                currentSlideIndex: 0
            }
        },
        methods: {
            prevSlide() {
                if (this.currentSlideIndex > 0) {
                    this.currentSlideIndex--
                }
            },
            nextSlide() {
                if (this.currentSlideIndex >= this.carousel_data.length - 1) {
                    this.currentSlideIndex = 0
                } else {
                    this.currentSlideIndex++
                }
            }
        }
    }
</script>

<style lang="scss">

    .carousel-conteiner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 60px 0;
        &__button {
            border: none;
            outline: none;
            background: #FFFFFF;
        }
    }
    .wrapper {
        max-width: 310px;
        overflow: hidden;
    }
    .v-carousel {
        display: flex;
        transition: all ease .5s;
        margin: 0 auto;
    }
</style>