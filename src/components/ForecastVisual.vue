
<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const forecastIcon = computed(() => {
  return store.clima.forecastIcon
})


//showSnow = Davis forecast icon values associated with snow
const showSnow = computed(()=> {
  const snowSet = new Set([18, 19, 22, 23]);
 return snowSet.has(forecastIcon.value)
  
})
var iconNameString
var forecastNameString

const cssProp = computed(() =>{
  switch (forecastIcon.value) {
    case 2: return "--icon-color-string: gray";  
      break; 
    case 3: return "--icon-color-string: linear-gradient(gray 0% 70%, blue 70% 100%)";
      break;//conic-gradient(at 53% 50%, yellow 0deg 90deg, blue 90deg 205deg, yellow 205deg 360deg)
    case 22:    
    case 6: return "--icon-color-string: conic-gradient(at 43% 47%, orange 0deg 90deg, gray 90deg 205deg, orange 205deg 360deg)";
      break;
    case 23:
    case 7: return "--icon-color-string: conic-gradient(at 32% 55%, orange 0deg 29deg, gray 15deg 195deg, orange 195deg 360deg)";
      break;
    case 8: return "--icon-color-string: orange";
      break;
    case 18:  return "--icon-color-string: gray";
    //Mostly Cloudy, Snow within 12 hours
      break;
    case 19:  return "--icon-color-string: linear-gradient(gray 0% 70%, blue 70% 100%)";
    //Mostly Cloudy, Rain or Snow within 12 hours
      break;
    // case 22:  return "--icon-color-string: conic-gradient(at 53% 50%, orange 0deg 90deg, gray 90deg 205deg, orange 205deg 360deg)";
    // //Partly Cloudy, Snow within 12 hours
      break;
    // case 23:   return "--icon-color-string: conic-gradient(at 53% 50%, orange 0deg 90deg, gray 90deg 205deg, orange 205deg 360deg)";
    // //Partly Cloudy, Rain or Snow within 12 hours
      break;
    default:  return "--icon-color-string: gray";
}


})
function forecastIconSelect() {
  switch (forecastIcon.value) {
    case 2: iconNameString="fa-cloud";
            forecastNameString="Mostly cloudy"
      break;
    case 3: iconNameString="fa-cloud-rain";
            forecastNameString="Cloudy, rain"
      break;
    case 6: iconNameString="fa-cloud-sun";
            forecastNameString="Partly cloudy"
      break;
    case 7: iconNameString="fa-cloud-sun-rain";
            forecastNameString="Partly cloudy, rain"
      break;
    case 8: iconNameString="fa-sun";
            forecastNameString="Mostly clear"
      break;
    case 18:  iconNameString="fa-cloud";
              forecastNameString="Mostly cloudy, snow"
      break;
    case 19:  iconNameString="fa-cloud-rain";
              forecastNameString="Mostly cloudy, rain or snow"
      break;
    case 22:  iconNameString="fa-cloud-sun";
              forecastNameString="Partly cloudy, snow"
      break;
    case 23:  iconNameString="fa-cloud-sun-rain";
              forecastNameString="Partly cloudy, rain or snow"
      break;
    default:  iconNameString="fa-xmarks-lines";
              forecastNameString="Error"            
  }
}

//this is the original function. 
// function forecastIconSelect() {
//   switch (forecastIcon.value) {
//     case 2: iconNameString="fa-cloud";
//       break;
//     case 3: iconNameString="fa-cloud-rain";
//       break;
//     case 6: iconNameString="fa-cloud-sun";
//       break;
//     case 7: iconNameString="fa-cloud-sun-rain";
            
//       break;
//     case 8: iconNameString="fa-sun";
            
//       break;
//     case 18:  iconNameString="fa-snowflake";
              
//       break;
//     case 19:  iconNameString="fa-cloud-meatball";
              
//       break;
//     case 22:  iconNameString="fa-cloud-meatball";
             
//       break;
//     case 23:  iconNameString="fa-poo-storm";
             
//       break;
//     default:  iconNameString="fa-xmarks-lines";
             
//   }
// }


var forecastIconIcon = computed(() => {
  // return "fa-solid " + forecastIconSelect()
  forecastIconSelect()
  console.log("iconmamestring= " + iconNameString)
  return "fa-solid " + iconNameString
})
</script>


<template>
  <div class="forecastArea">
    <div><b>Forecast</b></div> 
  <div class="forecast-icons">
    <v-icon class="forecast-icon" :icon="forecastIconIcon" :style="cssProp"/>
    <div v-if="showSnow"> <v-icon class="extra-forecast" icon="fa-solid fa-snowflake" style="color: rgb(53, 53, 141)"/></div>
  </div>
  {{ forecastNameString }}
 
  </div>
</template>


<style>

.forecastArea{
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
  height:auto;
  align-items: right;

  text-align: right;
  /* background: conic-gradient(at 53% 50%, yellow 0deg 90deg, blue 90deg 205deg, yellow 205deg 360deg); */
  background: var(--icon-color-string);
  
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>