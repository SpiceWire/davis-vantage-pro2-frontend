<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const windChill = computed(() => {
    return store.clima.windChill
})

</script>

<template >
    <div v-if="windChill < 25">
    <div><b>Feels Like</b></div>
    <div>
        <v-icon  icon="fa-solid fa-temperature-empty" class="windChillIcon" id="windChillIcon"/>
        {{ windChill }}
    </div>
    <div>Wind Chill</div>
    </div>
</template>

<style scoped>
.windChillIcon {
    color: rgb(86, 86, 223)
}
</style>