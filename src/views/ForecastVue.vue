<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
      <v-expansion-panel-title>
        this is the overall exp panel title {{ completeAddress }}
      </v-expansion-panel-title>
      <v-expansion-panel-text
        title="click to expand">
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
                </v-col>
              </v-row>
            </form>
          </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
    <NWSForecast v-for="(period, index) in newPropertiesUpdated?.periods" :key="index" :forecastPeriod="period">
    </NWSForecast>

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
import { onUnmounted, onMounted, computed, ref } from 'vue'
import NWSForecast from '../components/NWSForecast.vue'
import axios, { formToJSON } from 'axios';
import WebService from '@/services/WebService';

const store = useForecastStore();
var latLon = ref({ "lat": Number, "lon": Number })
var streetAddress = ref()
var cityName = ref()
var stateAbbrev = ref()
var zipCode = ref()


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
  form.append('state', 'stateAbbrev');
  form.append('zip', 'zipCode');
  form.append('format', 'json');
  console.log("form: ", form)
  await WebService.getArea(prepare(streetAddress.value) , prepare(cityName.value), stateAbbrev.value, zipCode.value)
  .then(({data})=> console.log(data))
  // const response = await axios.postForm('https://geocoding.geo.census.gov/geocoder/locations/address?', form,
  // { headers: { 'Access-Control-Allow-Origin': '*'}}); 
  console.log("response = ", response)
  
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
  store.fetchForecast()

})

var forecast = computed(() => {
  return store.forecast
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