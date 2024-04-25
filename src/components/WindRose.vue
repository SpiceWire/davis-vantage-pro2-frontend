
<script setup>
import { watchEffect, ref, isRef, unref, onUpdated, reactive } from 'vue';
import WindArrow from './WindArrow.vue';
import BigWindArrow from './BigWindArrow.vue'
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const speed = computed(() => {
  return store.clima.windSpeed
})
//offset of 35 degrees is the result of rendering.
const direction = computed(() => {
  return store.clima.windDirection + 35
})

const windID = computed(() => {
  return store.clima.keyID
})

var windDetail =
  reactive({ speed, direction, windID });

var windDirections = [];
var newWindDetail

onUpdated(() => {
  newWindDetail = Object.assign({}, windDetail)

  if (windDirections.length < 6) {
    windDirections.push(newWindDetail);
  } else {
    windDirections.shift();
    windDirections.push((newWindDetail));
  }
});

</script>

<template>
  <div class="windRoseArea">
  <div class="windRoseTile">
    <p>Wind</p>
    {{ speed }}
    <p>MPH</p>
    <wind-arrow v-for="(windDirection, index) in windDirections" :speed="windDirection.speed"
      :direction="windDirection.direction" :key="windDirection.index"></wind-arrow>
    <BigWindArrow v-bind="windDetail" id="windNow" />
  </div>
  <div>Wind Rose</div>
  </div>
</template>

<style scoped>
.windRoseArea{
  display: flex;
    flex-direction: column;
    align-items: center;
    
}

.windRoseTile {
  display: grid;
  position: relative;
  align-content: center;
  justify-items: center;
  font-family: sans-serif;
  color: rgb(10, 10, 9);
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background: rgb(78, 162, 173);
  font-size: 2em;
  font-weight: bolder;
  line-height: 1em;
}
</style>