<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const dayRain = computed(() => {
    return store.clima.dayRain
})

</script>

<template>
    <div class="dailyRainArea">
    <div>
        <v-icon  icon="fa-solid fa-ruler-vertical" class="dailyRainIcon" id="dailyRainIcon"/>
        {{ dayRain }} in
    </div>
    <div>Rain Today</div>
    </div>
</template>

<style scoped>

.dailyRainArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.dailyRainIcon {
    color: cyan
}
</style>