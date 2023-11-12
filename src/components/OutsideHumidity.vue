<script setup>

import { useClimaStore } from '../store/clima';
import { computed, onMounted } from 'vue'

const store = useClimaStore();


const outsideHumidity = computed(() => {
    return store.clima.outsideHumidity
})

</script>

<template>
    <div>
        <v-icon icon="fa-solid fa-droplet" class="outsideHumidityIcon"
            id="outsideHumidityIcon"/>
        {{ outsideHumidity }} %
    </div>
</template>

<style scoped>
.outsideHumidityIcon {
    color: blue
}
</style>