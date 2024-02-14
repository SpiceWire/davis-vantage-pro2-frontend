<template >
    <div>
        <div>Parameter name : {{ hourlyHeader }}</div>
        <br>other method:
        <br>
        <ParamValue v-for="(parameter, value, key) in hourlyArrayInfo" :key="key" :param="parameter" :val="value"></ParamValue>
        <br>
        <div><HourlyValues></HourlyValues></div>
        <br>
        

    </div>
</template>


<script setup>

import HourlyValues from '../components/HourlyValues';
import ParamValue from '@/components/ParamValue.vue';
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'
import { useHourlyStore } from '../store/hourly';
import { useDate } from 'vuetify'

const store = useHourlyStore();

// const props = defineProps(
//     ["weatherParameter"]
// )
const hourlyHeader = computed(() => {
    return store.hourlyHeaderName
})
var valueArray = []
var sortedFormattedDates = []
const arrObj = {
    length: 0,
    addElem(elem) {
        [].push.call(this, elem)
    },
}
const hourlyArrayInfo = computed(() => {
    var hourlyRaw = store.hourly
    console.log("hourly data thinks hourlyRaw is: " , hourlyRaw)
    var keyDate = useDate()
    for (var hourlyKey in hourlyRaw){
        var theISODate = new Date(hourlyKey).toLocaleString()
        valueArray.push({
            key:theISODate,
            value: hourlyRaw[hourlyKey]
        })
    }
    console.log(valueArray)
    return valueArray
})

// const hourlyArrInfo = computed(() => {
//     var hourlyInfo = store.hourly
//     var keyDate = useDate()

//     for (var key in hourlyInfo) {
//         console.log("key: " + key)
//         var theISODate = new Date(key).toISOString()
//         console.log("theISODate : " + theISODate) //prints OK
//         valueArray.push({
//             key: theISODate,
//             value: hourlyInfo[key]
//         })
//         var sortedDates = valueArray.sort(function (a, b) {
//             return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
//         });

//         for (var keyDate in sortedDates) {
//             var theISOLocale = new Date(keyDate).toLocaleString()
//             sortedFormattedDates.push({
//                 key: theISOLocale,
//                 value: sortedDates[key]
//             })
//             // arrObj.addElem({theISOLocale, sortedDates[key]})
//         }
//         return sortedFormattedDates
//         // var theISOLocale = new Date(key).toLocaleString()
//         // console.log("ISODate: " +theISODate )
//         // var formattedDate = keyDate.format(theISODate, 'fullDateWithWeekday')
//         // var formattedTime = theISODate.toLocaleString()
//         // console.log("Formatted: " + formattedDate)
//         // console.log("Formatted: " + formattedTime)
//         // console.log("Locale Formatted: " + theISOLocale)
//         // valueArray.push({
//         //    key: theISOLocale,
//         //     value: hourlyInfo[key]
//         // valueArray.push({
//         //     formattedDate,
//         //     hourlyInfo[key]
//         // })
//     }
// })

//     var sorted = valueArray.sort(function(a, b) {
//   return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0)
// });

// var sorted = valueArray.sort(function(a, b) {
//   return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
// });
//     return sorted
// })
// onMounted(
//     store.fetchHourly(weatherParameter)
// )




</script>
<style >
    
</style>