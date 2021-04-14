<template>
    <MainContainer>
        <div class="contacts">
            <h4>Контакты</h4>
            <p>Отдел по выполнению проектов и приему заказов:<br>+7 953 181 23 43 Роман Петрович</p>
            <p>Отдел службы контря качеста:<br>+7 962 278 38 82 Артем Юрьевич</p>
            <p>Отдел Главного Конструктора:<br>+7 910 703 29 35 Кирилл Юрьевич</p>
            <p>Email: 89531812343@mail.ru</p>
            <p>Адрес: г.Ефремов, Ефремовский район, ул Заводская, д 11, оф 1</p>
        </div>
        <div id="map"></div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    export default{
        name: 'Contacts',
        components: {
            MainContainer,
        },
    }
</script>

<style scoped>

</style>