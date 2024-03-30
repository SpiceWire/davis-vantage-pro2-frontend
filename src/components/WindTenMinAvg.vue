<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const tenMinAvgWindSpeed = computed(() => {
    return store.clima.tenMinAvgWindSpeed
})

</script>

<template>
    <div class="tenMinAvgWindSpeedArea">
    <div class="tenMinAvgWindSpeedTile">
        <v-icon icon="mdi mdi-weather-dust" class="tenMinAvgWindSpeedIcon"
            id="tenMinAvgWindSpeedIcon"/>
        {{ tenMinAvgWindSpeed }} mph
    </div>
    <div>10 Min Avg.</div>
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