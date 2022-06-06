<template>
    <p class="mt-3 ml-3 text-xl font-[600]">{{text}}</p>
</template>

<script lang="ts">
import { PropType } from "vue"
    export default {
        name: 'Text',
        props: {
            text: String as PropType<string>
        }
    }
</script>
