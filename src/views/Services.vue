<template>
    <MainContainer>
        <div class="services">
            <h2 class="services__title">деятельность</h2>
            <p class="services__text">Организация ООО «Биоинтех» имеет широкое отраслевое направление:</p>
            <ul class="services__list ">
                <li class="services__item">Изготовление и монтаж фильтрационных установок по типу: Ультрафильтрация, Нанофильтрация.</li>
                <li class="services__item">Изготовление Ферментеров, реакторов по типовым  чертежам, или по техническому заданию заказчиков.</li>
                <li class="services__item">Имеется Конструкторское бюро по разработкам и воплощению нестандартных проектов пищевой промышленности.</li>
                <li class="services__item">Выполним работы по изготовлению промышленных Градирен.</li>
                <li class="services__item">Выполняем изготовление установок под ключ с системой КИПа и Электросиловой части</li>
                <li class="services__item">Подбираем дополнительное оборудование в рамках Вашего бюджета. Имеем очень большое количество поставщиков дополнительного оборудования. </li>
                <li class="services__item">Производим реставрацию бывшего в употреблении оборудования.</li>
                <li class="services__item">Составляем и передаем полный комплект исполнительной документации.</li>
            </ul>
        </div>
        <div class="services__carousel">
            <SwiperSlider />
        </div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    import SwiperSlider from "../components/SwiperSlider";
    export default{
        name: 'Services',
        components: {
            MainContainer,
            SwiperSlider,
        },
    }
</script>

<style lang="scss">
    .services {
        padding: 40px 0 0px 0;

        &__title {
            font-size: 36px;
            text-transform: uppercase;
            margin-bottom: 25px;
        }
        &__text {
            font-size: 16px;
            font-weight: bold;
        }
        &__list {
            font-size: 14px;
            padding: 0;
            margin: 10px 0 25px;
            list-style: none;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
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

        &__carousel {
            max-height: 500px;
            width: 900px;
            margin: 50px auto;
            padding: 50px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>