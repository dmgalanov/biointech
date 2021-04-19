<template>
    <div class="popup-wrapper" ref="popup-wrapper">
        <div class="popup">
            <div class="popup__header">
                <p class="popup__title">Мы перезвоним Вам!</p>
                <button class="popup__button" @click="closePopup"><img src="../../assets/images/icons/close.svg" alt=""></button>
            </div>
            <div class="popup__content">
                <form class="form" v-on:submit.prevent="submitForm">
                    <div class="form-control">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" placeholder="Иванов Иван Иванович" v-model="name">
                    </div>

                    <div class="form-control">
                        <label for="tel">Контактный телефон</label>
                        <input type="number" id="tel" placeholder="+7 999 999 99 99" v-model.number="phone">
                    </div>

                    <div class="form-control">
                        <label for="email">E-mail</label>
                        <input type="text" id="email" placeholder="biointech@gmail.com">
                    </div>

                    <div class="form-control">
                        <label for="products">Продукция</label>
                        <select name="products" id="products" v-model="email">
                            <option value="0">------</option>
                            <option value="1">Выпарные установки</option>
                            <option value="2">Установки для упаривания и кристализации</option>
                            <option value="3">Установки мембранной фильтрации</option>
                            <option value="4">Установки для плазмолиза</option>
                            <option value="5">Пилотные сушильные установки</option>
                            <option value="6">Биофильтрационные установки</option>
                            <option value="7">Ферментационные установки</option>
                            <option value="8">Установки непрерывной стерелизации жидких сред</option>
                        </select>
                    </div>

                    <div class="form-control">
                        <label for="text">Дополнительная информация</label>
                        <textarea type="text" id="text" placeholder=""></textarea>
                    </div>

                    <button type="submit" class="form__button form-button">Отправить</button>
                </form>
            </div>
            <div class="popup__footer"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popup",
        data() {
            return {
                name: '',
                phone: 0,
                email: '0',
            }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            submitForm() {

            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if (item.target === vm.$refs['popup-wrapper']) {
                    vm.closePopup()
                }
            })
        }
    }
</script>

<style lang="scss">
    .popup-wrapper {
        background: rgba(64,64,64, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .popup {
        padding: 20px;
        position: fixed;
        top: 50px;
        width: 700px;
        background: #ffffff;
        box-shadow: 0 0 8px 0 #818CEB;
        z-index: 100;

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__title {

        }
        &__button {
            background: #ffffff;
            border: none;
        }
    }
</style>