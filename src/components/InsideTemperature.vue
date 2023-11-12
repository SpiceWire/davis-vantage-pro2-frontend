<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';


const store = useClimaStore();


var insideTemperature = computed(() => {
    return store.clima.insideTemperature
})


</script>


<template >
    <div>
        <v-icon icon="fas fa-temperature-three-quarters" class="insideTemperatureIcon" id="insideTemperatureIcon" />
        Inside {{ insideTemperature }}

    </div>
</template>

<style>
#insideTemperatureIcon {
    color:black
}
</style>