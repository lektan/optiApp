<template>
    <h1 :class="[size, font]" class="font-[600]">{{text}} 
        <span v-if="typeOf == 'temp'">&deg <span v-if="degreeToF" class="text-base">F</span> </span>
        <span class="text-xs" v-else-if="typeOf == 'wind'">m/s</span>
    </h1>
</template>

<script lang="ts">
import { PropType } from "vue"
    export default {
        name: 'Title',
        props: {
            text: {
                type: [String, Number] as PropType<string | number>,
                default: 'Title'
            },
            size: {
                type: String as PropType<string>,
                default: 'text-sm'
            },
            font: {
                type: String as PropType<string>,
                default: 'font-[600]'
            },
            typeOf: String as PropType<string>,
            degreeToF: Boolean
        }
    }
</script>
