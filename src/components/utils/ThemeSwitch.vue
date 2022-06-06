<template>
    <button @click="switchTheme" class="w-10 rounded-md flex items-center p-1 justify-center shadow-btn border-2 border-[#333] active:shadow-btnClick transition duration-300">
        <span v-if="!isDark"><img :src="moonSVG" alt="moon"></span>
        <span v-else><img :src="sunSVG" alt="sun"></span>
    </button>
</template>

<script>
    export default {
        name: 'ThemeSwitch',
        data() {
            return {
                sunSVG: require('../../assets/sun.svg'),
                moonSVG: require('../../assets/moon.svg'),
            }
        },
        props: {
            isDark: Boolean
        },
        methods: {
            switchTheme () {
                this.$emit('switch-theme')
            }
        }
    }
</script>
