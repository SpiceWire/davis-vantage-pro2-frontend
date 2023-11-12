<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

var barometer = computed(() => {return store.clima.barometer})

</script>

<template>
    <div class="barometerTile">
        <v-icon  icon="fa-solid fa-weight-hanging"/>
        {{ barometer }}
    </div>
    
</template>

<style scoped>
.barometerTile {
    display: flex;
    font-size: 50pt;
    color: red;
    align-items: center;
}

.WLabel {
    display: flex;
    color: white;
    align-items: center;
}
</style>

