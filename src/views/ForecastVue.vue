<template>
  <div>
    <v-btn id="testAddress" ></v-btn>
    TestAddress: {{ testAddress }}
    <br>
    <br>
    AddressAndForecast: {{ addressForecastObj }}
    <v-expansion-panels>
      <v-expansion-panel>
      <v-expansion-panel-title>
        this is the overall exp panel title {{ completeAddress }}
       <v-btn  @click="useMyLocation">Use my location</v-btn>
      </v-expansion-panel-title>
      <v-expansion-panel-text
        >
        <strong>Enter US street address for weather:</strong> 
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
                    label="Location: " 
                    :rules="[nonBlank]" 
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

    <NWSForecast v-for="item in forecast" :key="index" :forecastPeriod="item">
    </NWSForecast>
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
    <br>
    <br>
    HourlyForecast here:
  
    <br>
    <br>
  </div>
</template>


<script setup>
import { useForecastStore } from '@/store/forecast';
import { onUnmounted, onMounted, computed, ref } from 'vue'
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
var resultsOfSubmit = ref()

var testAddress = computed(()=>{
  return store.address
})

var addressForecastObj = computed(()=>{
  return store.addressAndForecast
})

var forecast = computed(() => {
  const thingie = store.forecast
  console.log("thingie is array?" + Array.isArray(thingie))
  console.log("thingie constructor? " + thingie.constructor.name)
  //on first load, thingie is not array, is object
  //after using getcoordinates, is string
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
  WebService.getArea(streetAddress.value , cityName.value, stateField.value, zipCode.value)
    .then(response => {
      if (response.status == 200) {
                console.log("You submitted address form data. Axios said it was successful.")
            }
      else {
        console.log("server response code: " , response.status)
        console.log("server response text: " , response.statusText)
        console.log("server response headers: ", response.headers)
        console.log("server response data: ", response.data)
      }      
    })
}



function useMyLocation(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("ForecastVue is requesting forecast by lat/lon")
      store.getMyForecastByLatLon(position.coords.latitude, position.coords.longitude);
});
} else {
  /* geolocation IS NOT available */
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
  store.giveAddress()
})


// var newProperties = computed(()=>{
//    return store.forecast.properties
// })
var otherProperties = []
var newPropertiesUpdated = computed(() => {
  var initialProperties = store.getProperties;
  var otherProperties = store.getElevation;

  console.log("otherProperties are:", otherProperties)
  return initialProperties
})



</script>
<style scoped>

</style>