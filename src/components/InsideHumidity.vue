<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';

defineEmits(['onClick'])

const store = useClimaStore();


var insideHumidity = computed(() => {
    return store.clima.insideHumidity
})


</script>


<template >
    <div class="insideHumidityArea">
    <div>
        <v-btn @click="$emit('getHourlyData', 'insideHumidity')" variant="plain">
        <v-icon 
            icon="fa-solid fa-droplet" 
            class="insideHumidityIcon" 
            id="insideHumidityIcon"
            name="insideHumidity"
            /></v-btn>
        {{ insideHumidity }}%

    </div>
    <div>Humidity </div>
    </div>
</template>

<style>
.insideHumidityArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.insideHumidityIcon {
    color: black
}
</style>