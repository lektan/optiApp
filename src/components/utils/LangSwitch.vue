<template>
  <button @click="langSwitch" class="w-10 uppercase font-bold text-xs mr-2 h-full rounded-md shadow-btn border-2 border-[#333] active:shadow-btnClick transition delay-0">
        <span class="">{{$i18n.locale}}</span>
    </button>
</template>

<script>
export default {
  name: "LangSwitch",
  data() {
    return { locales: ["ru", "en"] };
  },
  methods: {
    langSwitch(){
      if (this.$i18n.locale == 'ru') {
        this.$i18n.locale = 'en';
        return
      }
      this.$i18n.locale = 'ru'
    }
    
  }
};
</script>
