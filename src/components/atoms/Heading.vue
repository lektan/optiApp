<template>
    <h1 :class="isDark ? 'bg-[#bababa]' : 'bg-green-200'" class="rounded-md text-2xl font-[800] pl-2 py-1 pr-10 shadow-box w-fit">{{text}}</h1>
</template>

<script lang="ts">
import { PropType } from "vue"
    export default {
        props: {
            text: String as PropType<string>,
            isDark: Boolean as PropType<boolean>
        }
    }
</script>
