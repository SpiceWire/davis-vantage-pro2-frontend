
<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const forecastIcon = computed(() => {
  return store.clima.forecastIcon
})


function forecastIconSelect() {
  switch (forecastIcon.value) {
    case 2: return "fa-cloud";
      break;
    case 3: return "fa-cloud-rain";
      break;
    case 6: return "fa-cloud-sun";
      break;
    case 7: return "fa-cloud-sun-rain";
      break;
    case 8: return "fa-sun";
      break;
    case 18: return "fa-snowflake";
      break;
    case 19: return "fa-cloud-meatball";
      break;
    case 22: return "fa-cloud-meatball";
      break;
    case 23: return "fa-poo-storm";
      break;
    default: return "fa-xmarks-lines";
  }
}



var forecastIconIcon = computed(() => {
  return "fa-solid " + forecastIconSelect()
})
</script>


<template>
  <div class="forecastArea">
  <div >
    <v-icon class="forecast-icon" :icon="forecastIconIcon" />
  </div>
  <div>Forecast</div>
  </div>
</template>


<style>

.forecastArea{
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.forecast-icon {
  display: block;
  width: 1.5em;
  align-items: right;

  text-align: right;
  background: conic-gradient(at 53% 50%, yellow 0deg 90deg, blue 90deg 205deg, yellow 205deg 360deg);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>