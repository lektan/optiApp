<template>
    <div class="w-full h-screen overflow-hidden transition-all duration-200 p-3 sm:p-5 " :class="isDark ? 'bg-[#171627]' : 'text-[#333]'">
        <Header :isDark="isDark" @set-value="setValue" @switch-theme="toggleDarkMode" />
        <Hero :weather="weather" :isDark="isDark" />    
    </div>
</template>

<script>
import Hero from './components/molecules/Hero.vue';
import Header from './components/molecules/Header.vue';

export default {
    name: "App",
    components: { Hero, Header },
    data() {
        let isDark = localStorage.getItem('darkMode') == 'true'
        return {
            api_key: "2b0835d90c1d588c0a80f2368015c5e2",
            url_base: "https://api.openweathermap.org/data/2.5/",
            weather: {},
            isDark,
        };
    },
    methods: {
        setValue (e) {
          
            fetch(`${this.url_base}weather?q=${e}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                    return res.json();
                }).then(this.setResults);
        },
        setResults (results) {
            this.weather = results;
        
        },
        toggleDarkMode(){
            this.isDark = !this.isDark;
            localStorage.setItem('darkMode', this.isDark);
        },
    }
}
</script>
