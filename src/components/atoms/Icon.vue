<template>
    <div>
        <img :class="width" :src="iconSVG" alt="sun" />
    </div>
</template>

<script lang="ts">
import { PropType } from "vue"

    export default {
        name: 'Icon',
        data() {
            return {
                iconSVG: require(`../../assets/${(this as any).type}.svg`),
            }
        },
        props: {
            type: String as PropType<string>,
            width: {
                type: String as PropType<string>,
                default: 'w-[2rem]'
            }
        }
    }
</script>

