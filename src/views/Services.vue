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
