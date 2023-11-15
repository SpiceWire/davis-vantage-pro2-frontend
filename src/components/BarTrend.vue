<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const barTrend = computed(() => {
    return store.clima.barTrend
})

const emit = defineEmits(['barTrendMsg'])
const barTrendText = "Unavailable"

function barTrendSelectIcon() {
    switch ((barTrend.value)) {
        case -60:
            barTrendText = "Falling rapidly"
            return "fa-arrow-down";
            break;
        case -20:
            barTrendText = "Falling slowly"
            return "fa-arrow-trend-down";
            break;
        case 0:
            barTrendText = "Steady"
            return "fa-arrow-right";
            break;
        case 20:
            barTrendText = "Rising slowly"
            return "fa-arrow-trend-up";
            break;
        case 60:
            barTrendText = "Rising rapidly"
            return "fa-arrow-up";
            break;
        case 80:
            barTrendText = "Unavailable"
            return "fa-xmarks-lines";
            break;
        default:
            return "fa-xmarks-lines";
    }
}

var barTrendIcon = computed(() => {
    emit("barTrendText");
    return "fa-solid " + barTrendSelectIcon()
})

</script>

<template>
    <div class="barTrendClass">
        <v-icon  > {{ barTrendIcon }}</v-icon>
    </div>
</template>

<style scoped>
.barTrendClass {
    color: black;
    font-size: 20pt;
    margin-left: 5px;
}
</style>