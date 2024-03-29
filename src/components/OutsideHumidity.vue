<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();


const outsideHumidity = computed(() => {
    return store.clima.outsideHumidity
})

</script>

<template>
    <div class="outsideHumidityArea">
    <div class="outsideHumidityTile">
        <v-icon icon="fa-solid fa-droplet" class="outsideHumidityIcon"
            id="outsideHumidityIcon"/>
        {{ outsideHumidity }} %
    </div>
    <div>Humidity</div>
    </div>
</template>

<style scoped>

.outsideHumidityArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.outsideHumidityIcon {
    color: blue
}
</style>