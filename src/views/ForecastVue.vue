<template>
  <div>
    <v-expansion-panels v-model="expPanel" >
      <v-expansion-panel value="addressPanel">
      <v-expansion-panel-title >
        <v-row>
          <v-col cols="3">
            <strong> 
              Click to change location
            </strong>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-checkbox v-model="isDefaultLocation" label="Make this the default"></v-checkbox>
        <v-btn  @click="useMyLocation" >Use my coordinates</v-btn>  OR
        <br>
        <br>
        <strong>Enter US street address for forecast:</strong> 
          <div>
            <form @submit.prevent="submit">
              <v-row>
                <v-col cols="7">
                  <v-text-field 
                    id="addressField"  
                    v-model="streetAddress" 
                    label="Street Address " clearable
                    :rules="[nonBlank]"></v-text-field>
                  <v-text-field 
                    id="cityField"
                    v-model="cityName" 
                    label="City: " 
                    clearable 
                    :rules="[nonBlank]"></v-text-field>
                  <v-text-field 
                    id="stateField" 
                    v-model="stateAbbrev" 
                    label="State: " 
                    :rules="[nonBlank, usState]" 
                    clearable
                    @input="stateAbbrev = stateAbbrev.toUpperCase()">
                  </v-text-field>
                  <v-text-field 
                    id="zipField"
                    v-model="zipCode" 
                    label="ZIP code: " 
                    clearable 
                    :rules="[zipRules]" 
                    >
                  </v-text-field>
                  <v-btn type="submit">Submit</v-btn>
                  <v-spacer></v-spacer>
                  <br>
                  <br>
                </v-col>
              </v-row>
            </form>
          </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
    <v-container>
      <strong>Forecast for: {{ addressFromStore?.city }}, {{ addressFromStore?.state }} </strong>
    </v-container>

   <v-row>
    <v-col cols="7">
      
    </v-col>
   </v-row> 
    <NWSForecast v-for="item in forecast" :key="item.number" :forecastPeriod="item">
    </NWSForecast>
    <br>
    <br>

    <br>
    <br>
  
    <br>
    <br>
    HourlyForecast here:
  
    <br>
    <br>
  </div>
</template>


<script setup>
import { useForecastStore } from '@/store/forecast';
import { onUnmounted, onMounted, computed, ref, reactive} from 'vue'
import NWSForecast from '../components/NWSForecast.vue'
import ForecastPeriod from '../components/ForecastPeriod.vue'

import axios, { formToJSON } from 'axios';
import WebService from '@/services/WebService';

const store = useForecastStore();
var latLon = ref({ "lat": Number, "lon": Number })
var streetAddress = ref()
var cityName = ref()
var stateAbbrev = ref()
var zipCode = ref()
var isDefaultLocation = ref("false")
var expPanel =ref([])

// var expPanel = reactive({})
// var expPanel = computed((inputValue)=>{
//   return inputValue
// })
var resultsOfSubmit = ref()

var testAddress = computed(()=>{
  return store.address
})

var addressFromStore = computed(()=>{
  return store.address
})

var addressForecastObj = computed(()=>{
  return store.addressAndForecast
})

var forecast = computed(() => {
  return store.forecast
})


var completeAddress = computed(()=>{
return (streetAddress.value + " " + cityName.value + " " + stateAbbrev.value + " " + zipCode.value )
}) 

function zipRules(value) {
  return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value) || 'Valid ZIP required'
}

function nonBlank(value) {
  if (value) return true
  return 'Field must not be blank'
}

async function submit() {
  console.log("submitted")
  const form = new FormData();
  form.append('street', 'streetAddress');
  form.append('city', 'cityName');
  form.append('state', 'stateField');
  form.append('zip', 'zipCode');
  form.append('format', 'json');
  console.log("form: ", form)
  expPanel.value=[]
  if(isDefaultLocation.value==true){
    console.log("Default location= true")
    console.log("defaultLocation.value.value = true")
    console.log()
    store.makeDefaultAddress(streetAddress.value , cityName.value, stateField.value, zipCode.value)
  }
  else{
    store.getMyForecastByAddress(streetAddress.value , cityName.value, stateField.value, zipCode.value)
  }
  
}

function useMyLocation(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      if(isDefaultLocation.value==true){
       store.makeDefaultCoordinates(position.coords.latitude, position.coords.longitude);
      } else {
        store.getMyForecastByLatLon(position.coords.latitude, position.coords.longitude)
      }
      expPanel.value=[]
});
} else {
  alert("Geolocation is not available.")
}
}
function prepare(stringName){
  const tempName = stringName.trim()
  return tempName.replaceAll(" ", "+")
}
function usState(value) {
  const usStates = ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DE", "DC",
    "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NH", "NM", "NY", "NC",
    "ND", "MP", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT",
    "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"]

  return usStates.indexOf(value) > -1 || "Valid State name needed"
}

onMounted(() => {
  store.defaultForecast()
})



</script>
<style scoped>

</style>