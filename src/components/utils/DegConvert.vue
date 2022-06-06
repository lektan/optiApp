<template>
    <button @click="toggleDeg" class="absolute -top-7 sm:-top-2  left-0 border-2 border-[#333] w-6 h-6 flex justify-center items-center rounded-full"><img class="w-4/5" :src="refSVG" alt="convert"></button>
</template>

<script lang="ts">
    export default {
        name: 'DegConvert',
        data() {
            return {
                refSVG: require('../../assets/ref.svg')
            }
        },
        methods: {
            toggleDeg(): void {
                (this as any).$emit('toggle-deg')
            }
        }
    }
</script>
