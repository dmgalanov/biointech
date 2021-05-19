<template>
    <MainContainer>
        <div class="contacts">

            <popup
                v-if="isFormPopupVisible"
                @closePopup="closeFormPopup"
            />

            <div class="contacts__info">
                <h4 class="contacts__title">Контакты</h4>
                <p class="contacts__text"><span class="contacts__bold-text">Отдел по выполнению проектов и приему заказов:</span><br>+7 953 181 23 43 Роман Петрович</p>
                <p class="contacts__text"><span class="contacts__bold-text">Отдел службы контря качеста:</span><br>+7 962 278 38 82 Артем Юрьевич</p>
                <p class="contacts__text"><span class="contacts__bold-text">Отдел Главного Конструктора:</span><br>+7 910 703 29 35 Кирилл Юрьевич</p>
                <p class="contacts__text"><span class="contacts__bold-text">Email: </span>89531812343@mail.ru</p>
                <p class="contacts__text"><span class="contacts__bold-text">Адрес: </span>г.Ефремов, Ефремовский район, ул Заводская, д 11, оф 1</p>
                <button class="contacts__button contacts-button show-form" @click="showPopup"><span class="contacts-button__text contacts-button-text">Заказать звонок</span></button>
            </div>
            <div class="contacts__map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.267956925353!2d38.10786571537718!3d53.15923129641188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413121f97df275c9%3A0xbd17dc2efc4c3ea4!2z0JfQsNCy0L7QtNGB0LrQsNGPINGD0LsuLCAxMSwg0JXRhNGA0LXQvNC-0LIsINCi0YPQu9GM0YHQutCw0Y8g0L7QsdC7LiwgMzAxODQw!5e0!3m2!1sru!2sru!4v1618751644837!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
        </div>
    </MainContainer>
</template>

<script>
    import MainContainer from "../components/MainContainer";
    import Popup from "../components/popup/popup";
    export default{
        name: 'Contacts',
        components: {
            MainContainer,
            Popup
        },
        data() {
            return {
                isFormPopupVisible: false
            }
        },
        methods: {
            showPopup() {
                this.isFormPopupVisible = true;
            },
            closeFormPopup() {
                this.isFormPopupVisible = false;
            },
        }
    }
</script>

