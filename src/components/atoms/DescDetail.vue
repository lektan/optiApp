<template>
    <div class="mt-3 ml-3 text-xl font-[600] flex items-center">
        <h3> {{text}}: </h3>
        <p class="font-[900] ml-3">{{dataText}}&deg</p>
    </div>
</template>

<script>
    export default {
        name: 'DescDetail',
        props: {
            text: String,
            dataText: [String, Number]
        }
    }
</script>
