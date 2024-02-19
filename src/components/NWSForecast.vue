<template >
    <div>
        <v-container>
         <v-row>
            <v-col>
                {{ forecastName }}
            </v-col>
            <v-col>
                {{ forecastStarttime }}
            </v-col>
            <v-col>
                {{ forecastTemperature }}&deg;{{ forecastTemperatureUnit }}
            </v-col>
            <v-col>
                
            </v-col>
         </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { useDate } from 'vuetify'
import { onUnmounted, onMounted, computed } from 'vue'

const aDate = useDate()
const props = defineProps(['forecastPeriod'])
console.log("props are: ", props)
// const forecastObj = computed(()=>{
//     new Map(props)

// });

var forecastName =computed(()=>
    props?.forecastPeriod?.name
)

var forecastNumber =computed(()=>
    props?.forecastPeriod?.number
)

var forecastStarttime =computed(()=>{
    var dateString = props?.forecastPeriod?.startTime
    return new Date(dateString).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
    
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


// var forecastItem = {
//     number: Number,
//     name: String,
//     startTime: String,
//     endTime: String,
//     isDaytime: Boolean,
//     temperature: Number,
//     temperatureUnit: String,
//     temperatureTrend: String,
//     probabilityOfPrecipitation: {
//         unitCode: String,
//         value: Number
//         },
//     dewpoint: {
//         unitCode: String,
//         value: Number
//         },
//     relativeHumidity: {
//         unitCode: String,
//         value: Number
//         },
//     windSpeed: String,
//     windDirection: String,
//     icon: String,
//     shortForecast: String,
//     detailedForecast: String
//     }

//recursve obj below
//     var forecastItem = computed(()=> {
//    Object.values(props)
//     })

// var forecastItem = computed(() => {
//     props.forecastPeriod?.["startTime"];
// })
    
//     console.log("keys: ", Object.keys(props.forecastPeriod))
//     console.log("values: ", Object.values(props.forecastPeriod))
// const formattedDate = computed(() => {
//   return props?.forecastPeriod?.startTime?.value ? selectedDate?.value?.toLocaleDateString("en") : "";
// });

</script>
<style >
    
</style>