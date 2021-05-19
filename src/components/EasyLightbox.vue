<template>
    <div class="light-box">


        <button class="light-box-button" @click="showMultiple(idx)" v-for="(image, idx) in images" :key="idx">
            <img class="light-box-image" :src="image" />
        </button>

        <!-- all props & events -->
        <vue-easy-lightbox
                escDisabled
                moveDisabled
                :visible="visible"
                :imgs="images"
                :index="index"
                @hide="handleHide"
        ></vue-easy-lightbox>
    </div>
</template>

<script>

    import VueEasyLightbox from 'vue-easy-lightbox'

    export default {
        components: {
            VueEasyLightbox
        },
        data() {
            return {
                images: [
                    require("../assets/images/certificates/doc1.jpg"),
                    require("../assets/images/certificates/doc2.jpg"),
                    require("../assets/images/certificates/doc3.jpg"),
                    require("../assets/images/certificates/doc4.jpg"),

                ],
                visible: false,
                index: 0
            }
        },
        methods: {
            showMultiple(idx) {
                this.images = [
                    require("../assets/images/certificates/doc1.jpg"),
                    require("../assets/images/certificates/doc2.jpg"),
                    require("../assets/images/certificates/doc3.jpg"),
                    require("../assets/images/certificates/doc4.jpg"),
                ]
                this.index = idx // index of imgList
                this.show()
            },
            show() {
                this.visible = true
            },
            handleHide() {
                this.visible = false
            }
        }
    }
</script>
