<template>
    <div>
      NWSForecast
      <NWSForecast v-for="(period, index) in newPropertiesUpdated?.periods" :key="index" :forecastPeriod="period"></NWSForecast>
       
        <br>
        NWSForecast end 
        <br>
        <br>
        PropertiesUpdated here:
        {{ newPropertiesUpdated?.periods }}
        <br>
        <br>
        Forecast here:
      <br>
        <br>
        {{ forecast }}
    </div>
</template>
<script setup>
import { useForecastStore } from '@/store/forecast';
import { onUnmounted, onMounted, computed } from 'vue'
import  NWSForecast from '../components/NWSForecast.vue'

const store = useForecastStore();

onMounted(()=>{
  store.fetchForecast()
  
})

var forecast=computed(()=>{
  return store.forecast
})
// var newProperties = computed(()=>{
//    return store.forecast.properties
// })
var otherProperties=[]
var newPropertiesUpdated =computed(()=>{
   var initialProperties = store.getProperties;
   var otherProperties = store.getElevation;
   
   console.log("otherProperties are:", otherProperties)
   return initialProperties
})



</script>
<style >
    
</style>