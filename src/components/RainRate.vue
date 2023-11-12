<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const rainRate = computed(() => {
    return store.clima.rainRate
})

</script>

<template>
    <div>
        <v-icon icon="fa-solid fa-ruler-vertical" class="rainRateIcon" id="rainRateIcon"/>
        {{ rainRate }} in/hr
    </div>
</template>

<style scoped>
.rainRateIcon {
    color: cyan
}
</style>