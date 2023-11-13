
<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';


const store = useClimaStore();


var lastHourRain = computed(() => {
    return store.clima.lastHourRain
})


</script>


<template >
    <div class="lastHourRainArea">
        <div>
        <v-icon icon="fas fa-clock-rotate-left" class="lastHourRainIcon" id="lastHourRainIcon" />
       {{ lastHourRain }}
    </div>
     Last Hour Rain 
    </div>
</template>

<style>
#lastHourRainIcon {
    color:black
}

.lastHourRainArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
</style>