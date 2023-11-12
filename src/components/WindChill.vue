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
        <v-icon  icon="fa-solid fa-temperature-full" class="windChillIcon" id="windChillIcon"/>
        <label for="windChillIcon">Wind Chill</label>
        {{ windChill }}

    </div>
</template>

<style scoped>
.windChillIcon {
    color: rgb(86, 86, 223)
}
</style>