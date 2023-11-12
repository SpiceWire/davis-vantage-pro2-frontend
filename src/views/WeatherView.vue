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
import TheChyron from '../components/TheChyron.vue';

const store = useClimaStore();

var polling

onMounted(() => pollData())

onUnmounted(() => clearInterval(polling));


function pollData() {
            polling = setInterval(() => {store.fetchClima()}, 15000)
        }

</script>

<template>
  <main>
    <div id="WeatherView">
      <WindRose id="wind-rose" />
      <InsideHumidity id="inside-humidity" />
      <ForecastVisual id="forecast-visual" />
      <TheTime id="the-time" />
      <OutsideTemperature id="outside-temperature" />
      <OutsideHumidity id="outside-humidity" />
      <TheBarometer id="the-barometer" />
      <BarTrend id="bar-trend" />
      <InsideTemperature id="inside-temperature" />
      
      <WindChill id="wind-chill" />
      <HeatIndex id="heat-index" />
      <DailyRain id="daily-rain" />
      <RainRate id="rain-rate" />
      <TheChyron id="the-chyron" />
    </div>

  </main>
</template>


<style>

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