<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'
import BarTrend from './BarTrend.vue';
const store = useClimaStore();

var barometer = computed(() => { return store.clima.barometer })
const barTrend = computed(() => {
    return store.clima.barTrend
})
var barTrendText = "Unavailable"

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


</script>

<template>
    <div class="barometerArea">
        <b>Barometer</b>
        <div class="barometerTile">
            <v-icon id="barometerIcon" icon="fa-solid fa-weight-hanging"></v-icon>
            {{ barometer }}
            <BarTrend :barTrendIconName="barTrendSelectIcon()" /> <br>
        </div>
        <div>{{ barTrendText }}</div>
    </div>
</template>

<style scoped>
.barometerArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

}

.barometerTile {
    display: flex;
    color: black;
    align-items: center;
}

div span {
    display: flex;
    align-content: center;
    color: black;
    float: none
}
</style>

