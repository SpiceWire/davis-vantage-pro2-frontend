<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const rainRate = computed(() => {
    return store.clima.rainRate
})

</script>

<template>
    <div class="rainRateArea">
    <div>
        <v-icon icon="fa-solid fa-ruler-vertical" class="rainRateIcon" id="rainRateIcon"/>
        {{ rainRate }} in/hr
    </div>
    <div>Rain Rate</div>
    </div>
</template>

<style scoped>

.rainRateArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.rainRateIcon {
    color:rgb(189, 163, 98)
}
</style>