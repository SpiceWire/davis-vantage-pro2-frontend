<script setup>

import { computed } from 'vue'
import { useClimaStore } from '../store/clima';

const store = useClimaStore();
const temperatureRange = [-30, -10, 0, 20, 32, 40, 60, 80, 100, 120]
var thermometerIconArr = [
    "fa-temperature-empty",
    "fa-temperature-empty",
    "fa-temperature-empty",
    "fa-temperature-quarter",
    "fa-temperature-quarter",
    "fa-temperature-half",
    "fa-temperature-three-quarters",
    "fa-temperature-full",
    "fa-temperature-full"
];

var outTemp = computed(() => {
    return store.clima.outsideTemperature
    
})

var heatIndex = computed(() => {
    return store.clima.heatIndex
})

var windChill = computed(() => {
    return store.clima.windChill
})

var  dynThermometerIcon  = computed(() => {
    var temperatureIndex = 1
    //uses current outdoor temperature to select the temperature range the thermometer will display
    for (let j = 0; j < temperatureRange.length; j++) {
        if (temperatureRange[j] >= outTemp.value) {
            temperatureIndex = j;
            break;
        }
    }
    //uses the temperature range to select the thermometer icon
    var thermometerIcon =  thermometerIconArr[temperatureIndex-1];
    var bounceIcon = ""
    if  (windChill.value < 20 || heatIndex.value > 95) {
        bounceIcon= " fa-bounce"
    }
    return "fa:fas " + thermometerIcon + bounceIcon
})

const colorThermometer = computed(() => {
    function temperaturePercent() { 
        return (((outTemp.value+30)/150)*100); //whole number percentage of the temperature spread.
    }
    let thermometerColor;
    if(outTemp.value >45){
        thermometerColor = colorInRange([255,0,0], [0,0,255], (temperaturePercent(outTemp.value)-50)/75);
    } else if (outTemp.value < 45){
        thermometerColor = colorInRange([0,0,255], [240,255,255], (temperaturePercent(outTemp.value))/75);
    } else {
        thermometerColor = [0,0,255];
    }
    return "rgb" + "("+ thermometerColor+ ")";
})

function colorInRange(color1, color2, weight)  {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}


</script>


<template >
    <div class="outsideTemperatureArea">
    <div>
        <v-icon :icon="dynThermometerIcon" id="temperIcon" />
        {{ outTemp }}
    </div>
    <div>Temperature</div>
    </div>
</template>

<style>
.outsideTemperatureArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
#temperIcon{
    color: v-bind("colorThermometer")
}
</style>