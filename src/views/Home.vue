<template>
  <div class="home">
    <section class="block-one">
      <MainContainer>
        <h1 class="block-one__title">Высококлассное промышленное оборудование</h1>
        <router-link to="/products" class="block-one__button button"><span class="button__text button-text">Каталог</span></router-link>
      </MainContainer>
    </section>
    <section class="block-two">
      <MainContainer>
        <div class="block-two__container">
          <div class="block-two__info">
            <h3 class="block-two__title">ООО«БиоИнтех»</h3>
            <p class="block-two__text">Ведущие компании доверяют нам задачи по поставки промышленного оборудования и его установки. Надежные технологии резки, гибкие пакеты услуг и интеллектуальные программные решения позволяют нам устанавливать стандарты во всем мире.</p>
            <router-link to="/services" class="block-two__button button"><span class="button__text button-text">Услуги</span></router-link>
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
        <h3 class="block-four__title">Сертификаты</h3>
        <EasyLightbox />
      </MainContainer>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContainer from "../components/MainContainer";
import EasyLightbox from "../components/EasyLightbox";

export default {
  name: 'Home',
  components: {
    MainContainer,
    EasyLightbox
  },

  data() {

  }
}

</script>
