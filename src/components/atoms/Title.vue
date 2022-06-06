<template>
    <h1 :class="[size, font]" class="font-[600]">{{text}} 
        <span v-if="typeOf == 'temp'">&deg <span v-if="degreeToF" class="text-base">F</span> </span>
        <span class="text-xs" v-else-if="typeOf == 'wind'">m/s</span>
    </h1>
</template>

<script>
    export default {
        name: 'Title',
        props: {
            text: {
                type: [String, Number],
                default: 'Title'
            },
            size: {
                type: String,
                default: 'text-sm'
            },
            font: {
                type: String,
                default: 'font-[600]'
            },
            typeOf: String,
            degreeToF: Boolean
        }
    }
</script>
