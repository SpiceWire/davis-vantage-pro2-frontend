
<script setup>
// This component selects and colors the forecast icon based on the icon value.
import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const forecastIcon = computed(() => {
  return store.clima.forecastIcon
})

//  Icon values from Davis documentation page 23:
//  Icon segments: S=Sun   PS=Partial Sun  C=Cloud  R=Rain   N=Snow
// Decimal   Segments  Forecast
//   8         S        Mostly clear
//   6        C PS      Partly cloudy
//   2        C         Mostly Cloudy
//   3        C R       Mostly Cloudy, Rain within 12 hours
//   18       C N       Mostly Cloudy, Snow within 12 hours
//   19       C R N     Mostly Cloudy, Rain or Snow within 12 hours
//   7        PS C R    Partly Cloudy, Rain within 12 hours
//   22       PS C N    Partly Cloudy, Snow within 12 hours
//   23       PS C R N  Partly Cloudy, Rain or Snow within 12 hours


//showSnow = Davis forecast icon values associated with snow
const showSnow = computed(() => {
  const snowSet = new Set([18, 19, 22, 23]);
  return snowSet.has(forecastIcon.value)
})

var iconNameString
var forecastNameString

const cssProp = computed(() => {
  switch (forecastIcon.value) {
    case 2: return "--icon-color-string: gray";
    case 3: return "--icon-color-string: linear-gradient(gray 0% 70%, blue 70% 100%)";
    case 22:
    case 6: return "--icon-color-string: conic-gradient(at 43% 47%, orange 0deg 83deg, gray 83deg 205deg, orange 205deg 360deg)";
    case 23:
    case 7: return "--icon-color-string: conic-gradient(at 32% 55%, orange 0deg 29deg, gray 15deg 195deg, orange 195deg 360deg)";
    case 8: return "--icon-color-string: orange";
    case 18: return "--icon-color-string: gray";
    case 19: return "--icon-color-string: linear-gradient(gray 0% 70%, blue 70% 100%)";
    default: return "--icon-color-string: gray";
  }


})
function forecastIconSelect() {
  switch (forecastIcon.value) {
    case 2: iconNameString = "fa-cloud";
      forecastNameString = "Mostly cloudy"
      break;
    case 3: iconNameString = "fa-cloud-rain";
      forecastNameString = "Cloudy, rain"
      break;
    case 6: iconNameString = "fa-cloud-sun";
      forecastNameString = "Partly cloudy"
      break;
    case 7: iconNameString = "fa-cloud-sun-rain";
      forecastNameString = "Partly cloudy, rain"
      break;
    case 8: iconNameString = "fa-sun";
      forecastNameString = "Mostly clear"
      break;
    case 18: iconNameString = "fa-cloud";
      forecastNameString = "Mostly cloudy, snow"
      break;
    case 19: iconNameString = "fa-cloud-rain";
      forecastNameString = "Mostly cloudy; rain or snow"
      break;
    case 22: iconNameString = "fa-cloud-sun";
      forecastNameString = "Partly cloudy, snow"
      break;
    case 23: iconNameString = "fa-cloud-sun-rain";
      forecastNameString = "Partly cloudy; rain or snow"
      break;
    default: iconNameString = "fa-xmarks-lines";
      forecastNameString = "Error"
  }
}


var forecastIconIcon = computed(() => {
  forecastIconSelect()
  return "fa-solid " + iconNameString
})
</script>


<template>
  <div class="forecastArea text-center">
    <div><b>Forecast</b></div>
    <div class="forecast-icons">
      <v-icon class="forecast-icon" :icon="forecastIconIcon" :style="cssProp" />
      <div v-if="showSnow"> <v-icon class="extra-forecast" icon="fa-solid fa-snowflake" style="color: rgb(53, 53, 141)" />
      </div>
    </div>
    {{ forecastNameString }}

  </div>
</template>


<style scoped>
.forecastArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.forecast-icons {
  display: flex
}

.forecast-icon {
  display: block;
  width: auto;
  height: auto;
  align-items: right;
  text-align: right;
  background: var(--icon-color-string);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>