<template>
    <div :class="isDark ? 'bg-white border-[#bababa] shadow-boxDark' : 'bg-[#f1e9dd] border-[#333] shadow-box'" class=" h-[83vh] sm:h-auto overflow-auto border-2 rounded-md p-2 py-10 md:p-6 lg:p-10 mt-5">
        <transition name="fade" mode="out-in">
        <div class="grid grid-cols-8 gap-6" :key="this.weather.id" v-if="weather.cod == 200">
            <!-- SVGs -->
            <div class="lg:col-span-1 lg:grid-cols-1 grid lg:grid-rows-4 grid-rows-1 grid-cols-4 col-span-8">
                <div class="relative flex justify-center items-center">
                    <DegConvert @toggle-deg="toggleDeg" />
                    <ShortDetail :degreeToF="degreeToF" type="temp" :titleText="$t('temp')" :dataText="weatherTemp" />
                </div>
                <ShortDetail type="wind" :titleText="$t('wind')" :dataText="weather.wind.speed" />
                <ShortDetail :titleText="$t('press')" :dataText="weather.main.pressure" />
                <ShortDetail :titleText="$t('hum')" :dataText="weather.main.humidity" />
            </div>
            <!-- Content -->
            <div class="col-span-8 md:col-span-3">
                <div :class="isDark ? 'bg-white border-[#bababa]' : 'bg-[#f1e9dd] border-[#333]'" class="h-full relative border-4 rounded-2xl py-3 px-6 flex flex-col justify-center items-center">
                    <Icon width="w-[10rem] md:w-[20rem]" :type="weather.weather[0].main" />
                </div>
            </div>
            <div class="col-span-8 md:col-span-5 lg:col-span-4">
                <div class="mb-6">
                <Heading :text="$t('shortDesc')" />
                <Text v-if="weather.weather[0].main == 'Rain'" :text="$t('shortDescMessRain')" />
                <Text v-else-if="weather.weather[0].main == 'Clear'" :text="$t('shortDescMessSun')" />
                <Text v-else-if="weather.weather[0].main == 'Clouds'" :text="$t('shortDescMessCloud')" />
                <Text v-else :text="$t('shortDescMessCloud')" />
                </div>
                <div>
                <Heading :text="$t('shortDescOther')" />
                <div>
                    <DescDetail :text="$t('maxTemp')" :dataText="weather.main.temp_max" />
                    <DescDetail :text="$t('minTemp')" :dataText="weather.main.temp_min" />
                    <DescDetail :text="$t('feelTemp')" :dataText="weather.main.feels_like" />
                    <DescDetail :text="$t('windDeg')" :dataText="weather.wind.deg" />
                </div>
                </div>
            </div>
        </div>
        <div class="col-span-8" v-else>{{$t('noCountry')}}</div>
        </transition>
    </div>
</template>

<script>
import Icon from '../atoms/Icon.vue';
import ShortDetail from './ShortDetail.vue';
import { useI18n } from 'vue-i18n'
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';
import DescDetail from '../atoms/DescDetail.vue';
import DegConvert from '../utils/DegConvert.vue';

    export default {
    name: "Hero",
    props: {
        isDark: Boolean,
        weather: Object,
    },
    data() {
        return {
            degreeToF: false,
            weatherTemp: 0
        }
    },
    methods: {
        toggleDeg() {
            this.degreeToF = !this.degreeToF;
            if(this.degreeToF) {
                this.weatherTemp = ((this.weather.main.temp * 1.8) + 32).toFixed(1)
            }
            else {
                this.weatherTemp = this.weather.main.temp
            }
          
        }
    },
    components: { Icon, ShortDetail, Heading, Text, DescDetail, DegConvert },
    setup() {
        const { t } = useI18n({
        inheritLocale: true,
        useScope: 'local'
        })
        return { t }
    },
    updated () {
        if (this.weather.cod == 200) {
            this.weatherTemp = this.weather.main.temp,
            this.degreeToF = false;
        }
    }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
