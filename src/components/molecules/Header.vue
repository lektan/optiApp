<template>
    <div :class="isDark ? 'bg-white border-[#bababa] shadow-boxDark' : 'bg-[#f1e9dd] border-[#333] shadow-box'" class=" border-2 rounded-md py-3 px-6 flex justify-between">
        <Input :isDark="isDark" @set-value="setValue" />
        <div class="flex">
            <LangSwitch />
            <ThemeSwitch :isDark="isDark" @switch-theme="toggleDarkMode" />
        </div>
    </div>
</template>

<script>
import Input from '../atoms/Input.vue';
import ThemeSwitch from '../utils/ThemeSwitch.vue';
import LangSwitch from '../utils/LangSwitch.vue';
    export default {
    components: { Input, ThemeSwitch, LangSwitch },
    props:{
        isDark: Boolean,
    },
    methods: {
        setValue(e) {
            this.$emit('set-value', e)
        },
        toggleDarkMode() {
            this.$emit('switch-theme')
        }
    }
}
</script>
