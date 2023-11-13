<script setup>
import { onUnmounted, onMounted, computed } from 'vue'
import { useClimaStore } from '../store/clima';
import TheBarometer from '../components/TheBarometer.vue'
import OutsideTemperature from '../components/OutsideTemperature.vue'
import WindRose from '../components/WindRose.vue';
import BarTrend from '../components/BarTrend.vue';
import ForecastVisual from '../components/ForecastVisual.vue';
import HeatIndex from '../components/HeatIndex.vue';
import OutsideHumidity from '../components/OutsideHumidity.vue';
import DailyRain from '../components/DailyRain.vue';
import RainRate from '../components/RainRate.vue';
import TheTime from '../components/TheTime.vue';
import WindChill from '../components/WindChill.vue';
import InsideTemperature from '../components/InsideTemperature.vue';
import InsideHumidity from '../components/InsideHumidity.vue';
import WindTwoMinAvg from '../components/WindTwoMinAvg.vue';
import WindGust from '@/components/WindGust.vue';
import LastHourRain from '../components/LastHourRain.vue';
import WindTenMinAvg  from '../components/WindTenMinAvg.vue';
const store = useClimaStore();

var polling

onMounted(() => pollData())

onUnmounted(() => clearInterval(polling));


function pollData() {
  polling = setInterval(() => { store.fetchClima() }, 15000)
}

</script>

<template>
  <main>
    <div id="WeatherView">
      <v-contaner class="live-weather">
        <v-row align:center no-gutters style="height: 150px;">
          <v-col 
            cols="4"
            class="flex-grow-0"
            >
            <TheTime id="the-time" />
            <WindRose id="wind-rose" />
          </v-col>
          <v-col  
              cols="6"
            class="flex-grow-1"

            >
            <v-row  class="d-flex-wrap flex-row justify-space-between">
              <div class="outside-conditions" style="text-align:center">
                <b>Outside</b>
                <v-divider></v-divider>
              <OutsideTemperature id="outside-temperature" />
              <v-divider></v-divider>
              <OutsideHumidity id="outside-humidity" />
              </div>
              <div class="inside-conditions" style="text-align:center">
                <b>Inside</b>
                <v-divider></v-divider>
               <InsideTemperature id="inside-temperature" />
              <v-divider></v-divider>
              <InsideHumidity id="inside-humidity" />
              </div>
              <div class="rain-conditions" style="text-align:center">
                <b>Rain</b>
                <DailyRain id="daily-rain" />
                <RainRate id="rain-rate" />
                <LastHourRain id="last-hour-rain"/>
              </div>
              <div class="wind-conditions" style="text-align:center">
                <b>Wind</b>
                <WindTenMinAvg id="wind-ten-min-avg"/>
                <WindGust id="wind-gust" />
                <WindTwoMinAvg id="wind-tow-min-avg"/>
              </div>
              <TheBarometer id="the-barometer" />
              <ForecastVisual id="forecast-visual" /> 
              
              
              <WindChill id="wind-chill" />
              <HeatIndex id="heat-index" />
               
              
              
            </v-row>           
          </v-col>
        </v-row>
      </v-contaner>
      
    </div>

  </main>
</template>


<style>
.wind-conditions{
  border: 3px solid black;
}
.outside-conditions {
  border: 3px solid black;
}
.inside-conditions {
  border: 3px solid black;
}

.rain-conditions{
  border: 3px solid blue;
}
#WeatherView {
  font-size: 2rem;
  /* display:grid;
  gap: 0px 0px;
  grid-template-rows: 1fr 1fr 1fr 1fr .5fr;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  
  grid-template-areas:
      "wind-rose forecast-visual  . the-time . "
      "wind-rose outside-temperature outside-humidity the-barometer bar-trend"
      ". . inside-temperature inside-humidity wind-chill heat-index"
      ". . daily-rain . . rain-rate"
      "the-chyron the-chyron the-chyron the-chyron the-chyron the-chyron"; */
}

/* #wind-rose{
  grid-area: wind-rose
}
#forecast-visual{
  grid-area: forecast-visual
}
#the-time{
  grid-area: the-time
}
#outside-temperature{
  grid-area: outside-temperature
}
#the-barometer{
  grid-area: the-barometer
}
#bar-trend{
  grid-area: bar-trend
}
#inside-temperature{
  grid-area: inside-temperature
}
#wind-chill{
  grid-area: wind-chill
}
#heat-index{
  grid-area: heat-index
}
#daily-rain{
  grid-area: daily-rain
}
#rain-rate{
  grid-area: rain-rate
}
#the-chyron{
  grid-area: the-chyron
} */
</style>