<template>
    <div>
        <img :class="width" :src="iconSVG" alt="sun" />
    </div>
</template>

<script>
    export default {
        name: 'Icon',
        data() {
            return {
                iconSVG: require(`../../assets/${this.type}.svg`),
            }
        },
        props: {
            type: String,
            width: {
                type: String,
                default: 'w-[2rem]'
            }
        }
    }
</script>

