<template>
    <div class="mt-3 ml-3 text-xl font-[600] flex items-center">
        <h3> {{text}}: </h3>
        <p class="font-[900] ml-3">{{dataText}}&deg</p>
    </div>
</template>

<script lang="ts">
import {PropType} from 'vue'
    export default {
        name: 'DescDetail',
        props: {
            text: String as PropType<string>,
            dataText: [String, Number] as PropType<string | number>
        }
    }
</script>
