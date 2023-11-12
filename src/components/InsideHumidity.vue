<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';


const store = useClimaStore();


var insideHumidity = computed(() => {
    return store.clima.insideHumidity
})


</script>


<template >
    <div>
        <v-icon icon="fa-solid fa-droplet" class="insideHumidityIcon" id="insideHumidityIcon" />
        {{ insideHumidity }}%

    </div>
</template>

<style>
.insideHumidityIcon {
    color: blue
}
</style>