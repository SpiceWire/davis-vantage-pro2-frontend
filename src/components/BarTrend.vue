<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const barTrend = computed(() => {
    return store.clima.barTrend
})

function barTrendSelectIcon() {
    switch ((barTrend.value)) {
        case -60:
            return "fa-arrow-down";
            break;
        case -20:
            return "fa-arrow-trend-down";
            break;
        case 0:
            return "fa-arrow-right";
            break;
        case 20:
            return "fa-arrow-trend-up";
            break;
        case 60:
            return "fa-arrow-up";
            break;
        case 80:
            return "fa-xmarks-lines";
            break;
        default:
            return "fa-xmarks-lines";
    }
}

var barTrendIcon = computed(() => {
    return "fa-solid " + barTrendSelectIcon()
})
//could not find aliased icon $barTrendIcon with 
//<v-icon  >{{ `$barTrendIcon` }}</v-icon> 
//<v-icon  >{{ `$barTrendIcon` }}</v-icon>
//and  return "fas" + barTrendSelectIcon()
//or return ["fas",  barTrendSelectIcon()]
</script>

<template>
    <div class="barTrendClass">
        <v-icon  >{{ barTrendIcon }}</v-icon>
        {{ barTrend }}
        {{ barTrendIcon }}
    </div>
</template>

<style scoped>
.barTrendClass {
    color: black
}
</style>