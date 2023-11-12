<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const heatIndex = computed(() => {
    return store.clima.heatIndex
})


</script>

<template >
    <div v-if="heatIndex > 94">
        <v-icon icon="fa-solid fa-temperature-full" class="heatIndexIcon" id="heatIndexIcon"/>
        <label for="heatIndexIcon">Heat Index</label>
        heatIndex {{ heatIndex }}

    </div>
</template>

<style scoped>
.heatIndexIcon {
    color: red
}
</style>