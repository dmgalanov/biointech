<template>
    <button :class="color" @click="$emit('action')">
        <slot />
    </button>
</template>

<script>
    export default {
        name: "NavigationButton",
        emits: ['action'],
        props: {
            color:{
                type: String,
                default: '',
                validator(value) {
                    return ['', 'bgColor'].includes(value)
                }
            }
        }
    }

</script>

<style lang="scss">
    button {
        border: none;
        background: none;
        width: 295px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        margin: 25px;
        display: flex;
    }
</style>