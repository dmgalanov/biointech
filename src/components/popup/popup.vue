<template>
    <div class="popup-wrapper" ref="popup-wrapper">
        <div class="popup">
            <div class="popup__header">
                <h1 class="popup__title">Мы перезвоним Вам!</h1>
                <button class="popup__button" @click="closePopup"><img src="../../assets/images/icons/close2.svg" alt=""></button>
            </div>
            <div class="form">
                <form class="form__body" v-on:submit.prevent="submitForm">
                    <div class="form__item" :class="{invalid: errors.name}">
                        <label class="form__label" for="name">Ваше имя:*</label>
                        <input
                                class="form__input"
                                type="text" id="name"
                                placeholder="Иванов Иван Иванович"
                                v-model.trim="name"
                        >
                        <small class="form__small" v-if="errors.name">{{ errors.name }}</small>
                    </div>

                    <div class="form__item" :class="{invalid: errors.phone}">
                        <label class="form__label" for="phone">Контактный телефон:*</label>
                        <input
                                class="form__input"
                                type="tel" id="phone"
                                placeholder="+7 999 999 99 99"
                                v-model.number="phone"
                        >
                        <small class="form__small" v-if="errors.phone">{{ errors.phone }}</small>
                    </div>

                    <div class="form__item">
                        <label class="form__label" for="email">E-mail:</label>
                        <input
                                class="form__input"
                                type="email"
                                id="email"
                                placeholder="biointech@gmail.com"
                                v-model.trim="email"
                        >
                    </div>

                    <div class="form__item">
                        <label class="form__label" for="products">Продукция:</label>
                        <select class="form__input select" name="products" id="products" v-model="product">
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

                    <div class="form__item">
                        <label class="form__label" for="message">Сообщение:</label>
                        <textarea
                                class="form__input"
                                type="text"
                                id="message"
                                placeholder=""
                                v-model="message"
                        >
                        </textarea>
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
                phone: '',
                email: '',
                product: '0',
                message: '',
                errors: {
                    name: null,
                    phone: null
                }
            }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            formIsValid() {
                let isValid = true;

                if (this.name.length === 0) {
                    this.errors.name = 'Поле не может быть пустым'
                    isValid = false
                } else {
                    this.errors.name = null
                }

                if (this.phone.length === 0) {
                    this.errors.phone = 'Поле не может быть пустым'
                    isValid = false
                } else {
                    this.errors.phone = null
                }

                return isValid
            },
            submitForm() {
                if (this.formIsValid()) {
                    console.log('name', this.name)
                    console.log('phone', this.phone)
                    console.log('email', this.email)
                    console.log('product', this.product)
                    console.log('message', this.message)
                }
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
            font-size: 18px;
        }
        &__button {
            background: #ffffff;
            border: none;
            color: #818CEB;
        }
    }
    .form {
        max-width: 600px;
        margin: 0 auto;

        &__item {
            margin: 0 0 15px 0;
        }
        &__small {
            color: #ff0000;
        }
        &__label {
            font-size: 14px;
            display: block;
            margin: 0 0 10px 0;
        }
        &__input {
            height: 30px;
            padding: 0 15px;
            border-radius: 5px;
            width: 100%;
            font-size: 14px;
            border: 1px solid #818CEB;
            outline: none;
        }
        &__button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50px;
            background-color: #818CEB;
            color: #ffffff;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 20px;
            border: none;
            box-shadow: 0 3px 0 #303555;
            transition: background-color 0.5s ease 0s;
            position: relative;
            top: 0;

            &:hover {
                background-color: #5f68aa;
            }
            &:active {
                top: 3px;
                box-shadow: 0 1px 0 #303555;
            }
        }
    }
    textarea.form__input {
        min-height: 100px;
        resize: vertical;
        padding: 10px;
    }
    .invalid input {
        border-color: #ff0000;
    }
</style>