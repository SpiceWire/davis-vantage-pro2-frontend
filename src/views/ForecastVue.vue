<template>
    <div>
      <v-row>
             <v-col cols="7">
              <v-text-field 
                label="Enter an address for local forecast: " 
                append-inner-icon="fas fa-magnifying-glass"
                clearable
                :rules="[zipRules]"
                @click:append-inner="findZip"
                >

              </v-text-field>
              
              <v-text-field 
              id="addressField"
              v-model="streetAddress"
              label="Street Address "
              clearable
              :rules="[nonBlank]" 
              >
              </v-text-field>
              <v-text-field 
              id="cityField"
              
              label="City: "
              clearable
              :rules="[nonBlank]" 
              >
              </v-text-field>
              <v-text-field 
              id="stateField"
              v-model="stateAbbrev"
              label="State: "
              :rules="[nonBlank, usState]"
              clearable
              @input="stateAbbrev = stateAbbrev.toUpperCase()"
              
              >
              </v-text-field>
              <v-text-field 
                id="zipField"
                label="ZIP code: " 
                clearable
                :rules="[zipRules]"
                @click:append-inner="findZip"
                >
              </v-text-field>

             </v-col>   
            <v-row>
              <v-btn type="submit">Submit</v-btn>
           
            </v-row>
            

                
            </v-row>
          
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
import { onUnmounted, onMounted, computed, ref } from 'vue'
import  NWSForecast from '../components/NWSForecast.vue'



function uppercase(el)  {
    {
        const sourceValue = document.getElementById("stateField").value
        const newValue = sourceValue.toUpperCase()

        if (sourceValue !== newValue) {
          document.getElementById("stateField").value = newValue
            var el = el.getElementById("stateField")
            el.dispatchEvent(new Event("stateField", { bubbles: true }))
        }
    }
}

var capState = computed(() =>{
  var stateValue = document.getElementById("stateField")
  if (stateValue?.value){
     return stateValue?.value?.toUppercase()
  }
    
})

const store = useForecastStore();
var latLon=ref({"lat":Number, "lon":Number})
var stateAbbrev = ref()
var streetAddress = ref()
function zipRules(value) {
   return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value) || 'Valid ZIP required'
}

function nonBlank(value){
  if (value) return true
  return 'Field must not be blank'
}

function usState(value){
  const usStates = ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DE", "DC",
   "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
   "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NH", "NM", "NY", "NC", 
   "ND", "MP", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "TT", 
   "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"]

   return usStates.indexOf(value) > -1 || "Valid State name needed"
}

function capitalizeState(value){
  console.log("captalize triggered")
  // var stateValue = document.getElementById("stateField").value 
  // console.log("stateValue is: ", stateValue)
  // stateValue = "hello"
  var stateValue = document.getElementById("stateField")
  console.log("statevalue is: ", stateValue.value)
  console.log("capitalize is: ", stateValue.value.toUpperCase())
  if (stateValue?.value){
     stateValue.value = stateValue?.value?.toUpperCase()
  }
}
function findZip(value){
  //http://dev.virtualearth.net/REST/v1/Locations?countryRegion={countryRegion}&adminDistrict={adminDistrict}&locality={locality}&postalCode={postalCode}&addressLine={addressLine}&userLocation={userLocation}&userIp={userIp}&usermapView={usermapView}&includeNeighborhood={includeNeighborhood}&maxResults={maxResults}&key={BingMapsKey}
  //http://dev.virtualearth.net/REST/v1/Locations/US&postalCode={value}&maxResults=2&key={BingMapsKey}  
}
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
<style scoped>
    .v-field_input .state-field {
      text-transform: uppercase;
    }
    input#stateField {
      text-transform: uppercase;
    }
</style>