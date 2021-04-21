<template>
    <swiper
            class="swiper-slider"
            :slides-per-view="1"
            :space-between="700"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
    >
        <swiper-slide v-for="image in images" :key="image.id">
            <img class="swiper-slider-image" :src="image.imageUrl" />
        </swiper-slide>
    </swiper>
</template>
<script>
    // import Swiper core and required modules
    import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';
    import 'swiper/components/scrollbar/scrollbar.scss';

    // install Swiper modules
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

    // Import Swiper styles
    export default {
        data() {
            return{
                images: [
                    {
                        id:1,
                        imageUrl: require("../assets/images/services/1.jpg")
                    },
                    {
                        id: 2,
                        imageUrl: require("../assets/images/services/2.jpg")
                    },
                    {
                        id: 3,
                        imageUrl: require("../assets/images/services/3.jpg")
                    },
                    {
                        id: 4,
                        imageUrl: require("../assets/images/services/4.jpg")
                    },
                ]
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        methods: {

        },
    };
</script>
<!--
<template>
    <swiper class="parallax-slider"
    parallax
    grabCursor
    :navigation="{nextEl:'.nextArrow', prevEl:'.prevArrow'}"
    >
        <div class="parallax-slider-navigation">
            <div class="nav-indicator prevArrow">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="nav-indicator nextArrow">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
        </div>
        <swiper-slide class="parallax-slide" v-for="image in images" :key="image.id">
            <div class="parallax-slide-image">
            <img :src="image.imageUrl" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
    import SwiperCore,{Navigation, Parallax} from "swiper";
    import {Swiper, SwiperSlide} from "swiper/vue";
    import "swiper/swiper.scss";
    import "swiper/components/navigation/navigation.scss";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

    SwiperCore.use([Navigation, Parallax])
    export default {
        name: "SwiperSlider",
        data() {
            return{
                parallaxSwiperWidth:0,
                images: [
                    {
                        id:1,
                        imageUrl: require("../assets/images/services/1.jpg")
                    },
                    {
                        id: 2,
                        imageUrl: require("../assets/images/services/2.jpg")
                    },
                    {
                        id: 3,
                        imageUrl: require("../assets/images/services/3.jpg")
                    },
                    {
                        id: 4,
                        imageUrl: require("../assets/images/services/4.jpg")
                    },
                ]
            }
        },
        components: {
            Swiper,
            SwiperSlide,
            FontAwesomeIcon,
        }
    }
</script>

<style scoped>

</style>-->

<style lang="scss">
    .swiper-slider-image {
        height: 500px;
        width: 900px;
    }
</style>
