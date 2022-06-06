<template>
    <div class="flex flex-col justify-center items-center">
        <Title :degreeToF="degreeToF" :typeOf="type" :type="titleText" :text="dataText" size="text-2xl" font="font-[900]" />
        <Title :text="titleText" />
    </div>
</template>

<script>
import Icon from '../atoms/Icon.vue';
import Title from '../atoms/Title.vue';
    export default {
    name: "ShortDetail",
    components: { Icon, Title },
    props: {
        titleText: String,
        dataText: [Number, String],
        type: String,
        degreeToF: Boolean
    }
}
</script>
