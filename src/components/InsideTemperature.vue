<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';


const store = useClimaStore();

var insideTemperature = computed(() => {
    return store.clima.insideTemperature
})


</script>


<template >
    <div class="insideTemperatureArea">
        <div>
        <v-icon icon="fas fa-temperature-three-quarters" class="insideTemperatureIcon" id="insideTemperatureIcon" />
       {{ insideTemperature }}
    </div>
    Temperature 
    </div>
</template>

<style>
#insideTemperatureIcon {
    color:black
}

.insideTemperatureArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
</style>