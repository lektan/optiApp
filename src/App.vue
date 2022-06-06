<template>
    <div class="w-full h-screen overflow-hidden transition-all duration-200 p-3 sm:p-5 " :class="isDark ? 'bg-[#171627]' : 'text-[#333]'">
        <Header :isDark="isDark" @set-value="setValue" @switch-theme="toggleDarkMode" />
        <Hero :weather="weather" :isDark="isDark" />    
    </div>
</template>

<script lang="ts">
import Hero from './components/molecules/Hero.vue';
import Header from './components/molecules/Header.vue';

export default {
    name: "App",
    components: { Hero, Header },
    data() {
        let isDark : boolean = localStorage.getItem('darkMode') == 'true'
        return {
            api_key: "2b0835d90c1d588c0a80f2368015c5e2" as string,
            url_base: "https://api.openweathermap.org/data/2.5/" as string,
            weather: {} as object,
            isDark,
        };
    },
    methods: {
        setValue (e: string): void {
          
            fetch(`${(this as any).url_base}weather?q=${e}&units=metric&APPID=${(this as any).api_key}`)
                .then(res => {
                    return res.json();
                }).then(this.setResults);
        },
        setResults (results): void {
            (this as any).weather = results;
        
        },
        toggleDarkMode(): void{
            (this as any).isDark = !(this as any).isDark;
            localStorage.setItem('darkMode', (this as any).isDark);
        },
    }
}
</script>
