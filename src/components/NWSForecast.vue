<template >
    <div>
        <v-container>

         <v-row :class="forecastNumber">
            <v-col cols="3">
                {{ forecastName }}
            </v-col>
            <v-col cols="2">
                {{ forecastTemperature }}&deg;{{ forecastTemperatureUnit }}
            </v-col>
            <v-col cols="1">
                {{ forecastPrecipChance }}
            </v-col>
            <v-col cols="auto">
                {{ forecastDetailedForecast }}
            </v-col>
         </v-row>
         <v-row>

         </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { useDate } from 'vuetify'
import {  computed } from 'vue'

const props = defineProps(['forecastPeriod'])

var forecastName =computed(()=>
    props?.forecastPeriod?.name
)

var forecastNumber =computed(()=>{
    var oddEven = props?.forecastPeriod?.number
    return (oddEven%2==0) ? "bg-blue-lighten-5" : ""
})

var forecastStarttime =computed(()=>{
    var dateString = props?.forecastPeriod?.startTime
    return new Date(dateString).toLocaleDateString('en-us', { month:"short", day:"numeric"}) 
    
})

var forecastEndtime =computed(()=>{
    var dateString = props?.forecastPeriod?.endTime
    return new Date(dateString).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
})

var forecastTemperature =computed(()=>
    props?.forecastPeriod?.temperature
)

var forecastTemperatureUnit =computed(()=>
    props?.forecastPeriod?.temperatureUnit
)

var forecastPrecipChance =computed(()=>{
    var precip = props?.forecastPeriod?.probabilityOfPrecipitation?.value
    return (precip === null) ? " " :precip+"%" 
})
var forecastShortForecast =computed(()=>
    props?.forecastPeriod?.shortForecast
)

var forecastDetailedForecast =computed(()=>
    props?.forecastPeriod?.detailedForecast
)

</script>
<style >
    
</style>