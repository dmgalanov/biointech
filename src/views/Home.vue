<template>
  <div class="home">
    <section class="block-one">
      <MainContainer>
        <h1 class="block-one__title">Высококлассное<br>промышленное<br>оборудование</h1>
        <a href="/products" class="block-one__button button"><span class="button__text button-text">Каталог</span></a>
      </MainContainer>
    </section>
    <section class="block-two">
      <MainContainer>
        <div class="block-two__container">
          <div class="block-two__info">
            <h3 class="block-two__title">ООО«БиоИнтех»</h3>
            <p class="block-two__text">Ведущие компании доверяют нам задачи по<br>поставки промышленного оборудования и его<br>установки. Надежные технологии резки, гибкие<br>пакеты услуг и интеллектуальные программные<br>решения позволяют нам устанавливать стандарты<br>во всем мире.</p>
            <a href="/services" class="block-two__button button"><span class="button__text button-text">Услуги</span></a>
          </div>
          <div class="block-two__image">
            <img src="../assets/images/block-two__image.png" alt="">
          </div>
        </div>
      </MainContainer>
    </section>
    <section class="block-three">
      <MainContainer>
        <h3 class="block-three__title">Почему выбрали нас</h3>
        <div class="block-three__colums">
          <div class="block-three__colum-one colum-one">
            <h4 class="colum-one__title">Стандарты производства</h4>
            <img src="../assets/images/icons/block-three-columOne.svg" alt="" class="colum-one__image">
            <p class="colum-one__text">Мы полностью заботимся о каждом аспекте производства, от проектирования до обработки, сборки и тестирования каждого продукта</p>
          </div>
          <div class="block-three__colum-two colum-two">
            <h4 class="colum-two__title">Инновации в традициях</h4>
            <img src="../assets/images/icons/block-three-columTwo.svg" alt="" class="colum-two__image">
            <p class="colum-two__text">БиоИнтех, подкрепленная многолетним опытом, верит в непрерывное технологическое развитие и постоянные исследования инновационных решений, чтобы быть на высоком уровне.</p>
          </div>
          <div class="block-three__colum-three colum-three">
            <h4 class="colum-three__title">Мир организации</h4>
            <img src="../assets/images/icons/block-three-columThree.svg" alt="" class="colum-three__image">
            <p class="colum-three__text">Благодаря технической и международной сети продаж мы присутствуем на всех континентах, чтобы активно помогать нашим клиентам.</p>
          </div>
        </div>
      </MainContainer>
    </section>
    <section class="block-four">
      <MainContainer>
        <h3 class="block-four__title">Наши товары</h3>
        <div class="block-four__carousel">
          <v-carousel
                  :carousel_data="sliderItems"
          />
        </div>
        <a href="/products" class="block-four__look-all">Смотреть все</a>
      </MainContainer>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContainer from "../components/MainContainer";
import vCarousel from '../components/v-carousel'

export default {
  name: 'Home',
  components: {
    MainContainer,
    vCarousel
  },

  data() {
    return {
      sliderItems: [
        {id:1, name: 'img1', img: '1.png'},
        {id:2, name: 'img2', img: '2.png'},
        {id:3, name: 'img3', img: '3.png'},
        {id:4, name: 'img4', img: '4.png'},
        {id:5, name: 'img5', img: '5.png'}
      ]
    }
  }
}

</script>
