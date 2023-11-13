<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'


const store = useClimaStore();


const twoMinAvgWindSpeed = computed(() => {
    return store.clima.twoMinAvgWindSpeed
})

</script>

<template>
    <div class="twoMinAvgWindSpeedArea">
    <div class="twoMinAvgWindSpeedTile">
        <v-icon icon="mdi mdi-weather-windy" class="twoMinAvgWindSpeedIcon"
            id="twoMinAvgWindSpeedIcon"/>
        {{ twoMinAvgWindSpeed }}
    </div>
    <div>2 min avg.</div>
    </div>
</template>

<style scoped>

.twoMinAvgWindSpeedArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.twoMinAvgWindSpeedIcon {
    color: black
}
</style>