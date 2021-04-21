<template>
    <MainContainer>
        <div class="company">
            <h1 class="company__title">Сведения о компании</h1>
            <p class="company__text">OOO «Биоинтех» — признанный эксперт в области комплексного
                решения вопросов пищевой промышленности</p>
            <p class="company__text">Приоритетом компании является качественная реализация проектов в установленный
                срок и в рамках утвержденного бюджета. Внедряемые решения, позволяют сократить издержки
                предприятия в производстве, повысить эффективность, надежность
                и срок службы технологического оборудования Заказчика.</p>
            <div class="company__line"></div>
            <div class="company__block-one">
                <div class="company__wrapper">
                    <div class="company__paragraph">
                        <h3 class="company__block-one-title company__paragraph-title">История создания и развития компании</h3>
                        <p class="company__text company__block-one-text">ООО «Биоинтех» под
                            руководством Панкова Юрия Геннадьевича: Компания создавалась
                            совместно с ПромБиоТехнологии во главе Лушникова Александра
                            Олеговича, созданию поспособствовало развитие технологий пищевого
                            производства, а также плотное сотрудничество с компанией разработчика
                            проекта Bigor Biotechnology LLC во главе Щеблыкина Игоря Николаевича.</p>
                        <p class="company__text">Все три компании являются ключевым звеном создания новшеств в
                            пищевой и кормовой промышленности.</p>
                    </div>
                    <div class="company__image">фото компании, офиса</div>
                </div>
            </div>
            <div class="company__line"></div>
            <div class="company__block-two">
                <h3 class="company__block-two-title company__paragraph-title">Информация о сфере и направлении деятельности компании</h3>
                <p class="company__text company__block-two-text">Основные направления компании:</p>
                <ul class="company__list">
                    <li class="company__item">Выпуск уникального,
                        нестандартного оборудования пищевой и кормовой продукции</li>
                    <li class="company__item">Выполняем работы по типовым проектам и монтажу готового оборудования
                        на производствах, с гарантией качества</li>
                    <li class="company__item">Занимаемся изготовлением в
                        разборном состоянии, сборкой РВС под избыточным и атмосферным давлением.</li>
                    <li class="company__item">Изготовлением Градирен по Вашему техническому заданию.</li>
                    <li class="company__item">Изготовление промышленных
                        ферментеров, установок по выпариванию зерна.</li>
                    <li class="company__item">Расчет и изготовление установок Нано и
                        ультрафильтрации.</li>
                    <li class="company__item">Произведем монтаж трубопроводов пищевой линии.</li>
                    <li class="company__item">Производим проектирование систем КИПа и ЭС для установок пищевой промышленности.</li>
                    <li class="company__item">Работаем с передовыми поставщиками в России и за границей.</li>
                </ul>
            </div>
            <div class="company__line"></div>
            <div class="company__block-three">
                <h3 class="company__block-three-title company__paragraph-title">Планы и задачи компании</h3>
                <p class="company__text">Наша компания поставила первоочередную
                    задачу создать импортзамещение установок продукции пищевой
                    промышленности иностранного производства. Внести вклад в развитие
                    отраслей нашей страны: Биоинженерии, нано технологии, стирильные процессы
                    получения препаратов. Внедрение самых новых передовых технологий для производств
                    пищевого и кормового произвоств.</p>
            </div>
        </div>

    </MainContainer>
</template>

<script>
  import MainContainer from "../components/MainContainer";

  export default{
    name: 'Company',
    data() {
      return {
        active: 'one'
      }
    },
    computed: {

    },
    components: {
      MainContainer,

    },
  }
</script>

<style lang="scss">
  .company {
      padding: 40px 0;

      &__title {
          font-size: 36px;
          text-transform: uppercase;
          margin-bottom: 30px;
      }
      &__text {
          font-size: 14px;
          margin-bottom: 20px;
      }
      &__image {
          width: 400px;
          height: 300px;
          background-color: #818CEB;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
      }

      &__wrapper {
          display: flex;
      }
      &__paragraph {
          flex-basis: 55%;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
      }

      &__paragraph-title {
          font-size: 18px;
          text-transform: uppercase;
          margin: 30px 0;
      }

      &__list {
          font-size: 14px;
          padding: 0;
          margin: 25px 0;
          list-style: none;
          display: block;
          padding-inline-start: 40px;
      }
      &__item {
          padding-left: 20px;
          margin-bottom: 5px;
          position: relative;

          &:before {
              content: "";
              width: 6px;
              height: 6px;
              display: block;
              background: #818CEB;
              border-radius: 50%;
              position: absolute;
              top: 7px;
              left: 0;
          }
      }

      &__line {
          height: 2px;
          background: radial-gradient(#818CEB, #FFFFFF);
          margin: 10px 0;
      }
  }
</style>