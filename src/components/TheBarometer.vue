<script setup>
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'
import BarTrend from './BarTrend.vue';
const store = useClimaStore();

var barometer = computed(() => {return store.clima.barometer})

</script>

<template>
    <div class="barometerArea">
    <div class="barometerTile">
        <v-icon  id="barometerIcon" icon="fa-solid fa-weight-hanging"></v-icon>
        {{ barometer }}  <BarTrend /> <br>
    </div>
    <span>Barometer</span>
    </div>
</template>

<style scoped>
.barometerArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
 
}
.barometerTile {
    display: flex;
    color: black;
    align-items: center;
}

div span {
    display: flex;
    align-content: center;
    color:black;
    float:none
}
</style>

