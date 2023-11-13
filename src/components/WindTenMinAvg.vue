<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();


const outsideHumidity = computed(() => {
    return store.clima.tenMinAvgWindSpeed
})

</script>

<template>
    <div class="tenMinAvgWindSpeedArea">
    <div class="tenMinAvgWindSpeedTile">
        <v-icon icon="fmdi-weather-dust" class="tenMinAvgWindSpeedIcon"
            id="tenMinAvgWindSpeedIcon"/>
        {{ tenMinAvgWindSpeed }} %
    </div>
    <div>Humidity</div>
    </div>
</template>

<style scoped>

.tenMinAvgWindSpeedArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.tenMinAvgWindSpeedIcon {
    color: black
}
</style>