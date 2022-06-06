<template>
    <h1 :class="isDark ? 'bg-[#bababa]' : 'bg-green-200'" class="rounded-md text-2xl font-[800] pl-2 py-1 pr-10 shadow-box w-fit">{{text}}</h1>
</template>

<script>
    export default {
        props: {
            text: String,
            isDark: Boolean
        }
    }
</script>
