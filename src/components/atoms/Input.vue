<template>
    <input class="outline-none w-full pr-6 capitalize duration-300 bg-transparent font-[800] tracking-wide text-xl text-[#333]" @change="setChange" type="text" placeholder="Country name" autofocus />
</template>

<script lang="ts">
    export default {
        name: 'Input',
        methods: {
            setChange(e): void {
                (this as any).$emit('set-value', e.target.value)
            }
        },
        props: {
            isDark: Boolean
        }
    }
</script>