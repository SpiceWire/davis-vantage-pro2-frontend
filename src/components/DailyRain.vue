<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const dayRain = computed(() => {
    return store.clima.dayRain
})

</script>

<template>
    <div>
        <v-icon  icon="fa-solid fa-ruler-vertical" class="dailyRainIcon" id="dailyRainIcon"/>
        {{ dayRain }} in
    </div>
</template>

<style scoped>
.dailyRainIcon {
    color: cyan
}
</style>