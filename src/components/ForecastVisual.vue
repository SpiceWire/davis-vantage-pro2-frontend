
<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const forecastIcon = computed(() => {
  return store.clima.forecastIcon
})

var iconNameString
var iconColorString

function forecastIconSelect() {
  switch (forecastIcon.value) {
    case 2: iconNameString= "fa-cloud";
      break;
    case 3: iconNameString= "fa-cloud-rain";
      break;
    case 6: iconNameString= "fa-cloud-sun";
      break;
    case 7: iconNameString= "fa-cloud-sun-rain";
      break;
    case 8: iconNameString= "fa-sun";
      break;
    case 18: iconNameString= "fa-snowflake";
      break;
    case 19: iconNameString= "fa-cloud-meatball";
      break;
    case 22: iconNameString= "fa-cloud-meatball";
      break;
    case 23: iconNameString= "fa-poo-storm";
      break;
    default: iconNameString= "fa-xmarks-lines";
  }
}



var forecastIconIcon = computed(() => {
  // return "fa-solid " + forecastIconSelect()
  return "fa-solid" + iconNameString
})
</script>


<template>
  <div class="forecastArea">
  <div >
    <v-icon class="forecast-icon" :icon="forecastIconIcon" />
    {{ iconNameString }}
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
  background: var(forecastIconSelect()[1]);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>