
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
  <div class="forecast-icon">
    <v-icon  :icon="forecastIconIcon" />
  </div>
</template>


<style>
.forecast-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50pt;
  text-align: center;
  color: red
}
</style>