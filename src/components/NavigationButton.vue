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

</style>