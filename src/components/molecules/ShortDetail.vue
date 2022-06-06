<template>
    <div class="flex flex-col justify-center items-center">
        <Title :degreeToF="degreeToF" :typeOf="type" :type="titleText" :text="dataText" size="text-2xl" font="font-[900]" />
        <Title :text="titleText" />
    </div>
</template>

<script lang="ts">
import Icon from '../atoms/Icon.vue';
import Title from '../atoms/Title.vue';
import { PropType } from 'vue';

    export default {
    name: "ShortDetail",
    components: { Icon, Title },
    props: {
        titleText: String as PropType<string>,
        dataText: [Number, String] as PropType<string | number>,
        type: String as PropType<string>,
        degreeToF: Boolean as PropType<boolean>
    }
}
</script>
