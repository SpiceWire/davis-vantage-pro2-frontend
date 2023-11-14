
<script setup>

import { useClimaStore } from '../store/clima';
import { computed } from 'vue'

const store = useClimaStore();

const forecastIcon = computed(() => {
  return store.clima.forecastIcon
})

var iconNameString="fa-cloud"
var iconColorString

const cssProp = computed(() =>{
  switch (forecastIcon.value) {
    case 2: return "'--icon-color-string':(red)";  
      break;
    case 3: iconColorString="fa-cloud-rain";
            
      break;
    case 6: return "--icon-color-string: conic-gradient(at 53% 50%, yellow 0deg 90deg, blue 90deg 205deg, yellow 205deg 360deg)";
      break;
    case 7: iconColorString="fa-cloud-sun-rain";
            
      break;
    case 8: return "'--icon-color-string':(red)";
            
      break;
    case 18:  iconColorString="fa-snowflake";
              
      break;
    case 19:  iconColorString="fa-cloud-meatball";
              
      break;
    case 22:  iconColorString="fa-cloud-meatball";
             
      break;
    case 23:  iconColorString="fa-poo-storm";
             
      break;
    default:  iconColorString="fa-xmarks-lines";
}


})
function forecastIconSelect() {
  switch (forecastIcon.value) {
    case 2: iconNameString="fa-cloud";
      break;
    case 3: iconNameString="fa-cloud-rain";
      break;
    case 6: iconNameString="fa-cloud-sun";
      break;
    case 7: iconNameString="fa-cloud-sun-rain";
            
      break;
    case 8: iconNameString="fa-sun";
            
      break;
    case 18:  iconNameString="fa-snowflake";
              
      break;
    case 19:  iconNameString="fa-cloud-meatball";
              
      break;
    case 22:  iconNameString="fa-cloud-meatball";
             
      break;
    case 23:  iconNameString="fa-poo-storm";
             
      break;
    default:  iconNameString="fa-xmarks-lines";
             
  }
}



var forecastIconIcon = computed(() => {
  // return "fa-solid " + forecastIconSelect()
  forecastIconSelect()
  console.log("iconmamestring= " + iconNameString)
  return "fa-solid " + iconNameString
})
</script>


<template>
  <div class="forecastArea">
  <div >
    <v-icon class="forecast-icon" :icon="forecastIconIcon" :style="cssProp"/>
    
  </div>
  {{ iconNameString }}
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
  /* background: conic-gradient(at 53% 50%, yellow 0deg 90deg, blue 90deg 205deg, yellow 205deg 360deg); */
  background: var(--icon-color-string);
  
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>