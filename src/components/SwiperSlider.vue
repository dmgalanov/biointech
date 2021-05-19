<template>
    <div class="swiper-container">
        <swiper
                class="swiper-wrapper"
                :auto-height="true"
                :auto-wight="true"
                :loop="true"
                effect="flip"
                navigation
                :pagination="{ clickable: true, dynamicBullets: true }"

        >

            <swiper-slide class="swiper-slide" v-for="image in images" :key="image.id">
                <img class="swiper-slide__image" :src="image.imageUrl" />
            </swiper-slide>


        </swiper>
    </div>
</template>
<script>
    // import Swiper core and required modules
    import SwiperCore, { Navigation, EffectFade, EffectFlip, Pagination, Zoom } from 'swiper';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/swiper.scss';
    import 'swiper/components/effect-fade/effect-fade.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';
    import 'swiper/components/effect-flip/effect-flip.scss';
    import 'swiper/components/zoom/zoom.scss';

    // install Swiper modules
    SwiperCore.use([ Navigation, EffectFade, Pagination, EffectFlip, Zoom ]);


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



