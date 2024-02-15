<script setup>
import { onUnmounted, onMounted, computed } from 'vue'
import { useClimaStore } from '../store/clima';
import { useHourlyStore } from '@/store/hourly';
import TheBarometer from '../components/TheBarometer.vue'
import OutsideTemperature from '../components/OutsideTemperature.vue'
import WindRose from '../components/WindRose.vue';
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
const hourlyStore = useHourlyStore();


function getHourlyValues(e){
  const origName = e.currentTarget.id
  const replacedName = origName.replace("-","_")
  console.log("You clicked something called " + e.currentTarget.id + " which is now called " + replacedName)
  hourlyStore.fetchHourly(headerName)
}

var polling

onMounted(() => 
  store.fetchClima(),
  pollData()
  )

onUnmounted(() => clearInterval(polling));


function pollData() {
  polling = setInterval(() => { store.fetchClima() }, 15000)
}

var WindChillAmt=computed(()=>{
  return store.clima.windChill
})
</script>

<template>
  <main>
    <div id="WeatherView" >
      <v-container fluid class="live-weather " >
        <v-row  style="height: 150px;">
          
          <v-col 
            cols="4"
            class="flex-grow-0 flex-shrink-0 ga-5 justify-center"
            style="min-width: 400px">
            <TheTime id="the-time" />
            <br>
            <WindRose id="wind-rose" />
          </v-col>
          <v-col  
              
            class="flex-grow-1"
            >
            <v-row  class="d-flex-wrap flex-row justify-center ga-5">
              <div class="outside-conditions" style="text-align:center">
                <b>Outside</b>
                <v-divider></v-divider>
              <OutsideTemperature id="outside-temperature" @click="getHourlyValues"/>
              <v-divider></v-divider>
              <OutsideHumidity id="outside-humidity" @click="getHourlyValues"/>
              </div>
              <div class="inside-conditions text-center" >
                <b>Inside</b>
                <v-divider></v-divider>
               <InsideTemperature id="inside-temperature" @click="getHourlyValues"/>
              <v-divider></v-divider>
              <InsideHumidity id="inside-humidity" @click="getHourlyValues"/>
              </div>
              <div class="rain-conditions min-width=500px text-center"  >
                <b>Rain</b>
                <v-divider class="rain-divider border-opacity-100"   ></v-divider>
                <DailyRain id="daily-rain" @click="getHourlyValues"/>
                <v-divider class="rain-divider border-opacity-100"></v-divider>
                <RainRate id="rain-rate" @click="getHourlyValues"/>
                <v-divider class="rain-divider border-opacity-100"></v-divider>
                <LastHourRain id="last-hour-rain" @click="getHourlyValues"/>
              </div>
              <div class="wind-conditions text-center" >
                <b>Wind</b>
                <v-divider></v-divider>
                <WindTenMinAvg id="wind-ten-min-avg" @click="getHourlyValues"/>
                <v-divider></v-divider>
                <WindGust id="wind-gust" @click="getHourlyValues"/>
                <v-divider></v-divider>
                <WindTwoMinAvg id="wind-two-min-avg" @click="getHourlyValues"/>
              </div>
              <TheBarometer id="barometer" />
              <ForecastVisual id="forecast-visual" /> 
              <WindChill id="wind-chill" @click="getHourlyValues"/>
              <HeatIndex id="heat-index" @click="getHourlyValues"/>
              
            </v-row>           
          </v-col>
        </v-row>
      </v-container>
      
    </div>

  </main>
</template>


<style>
.wind-conditions{
  border: 3px solid black;
  border-radius:20px;
  background-color: rgb(197, 193, 193);
}
.outside-conditions {
  border: 3px solid black;
  border-radius:20px;
  background-color:lightgreen
}
.inside-conditions {
  border: 3px solid black;
  border-radius:20px;
  background-color: beige;
}
.rain-conditions{
  border: 3px solid black;
  border-radius:20px;
  background-color:#005587;
  color: #DAEBFE;
}
.rain-divider{
  color: #DAEBFE;
}
#WeatherView {
  font-size: 2rem;

}

</style>