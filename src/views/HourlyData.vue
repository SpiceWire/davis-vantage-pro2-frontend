<template >
    <div>
        <div>Parameter name : {{ hourlyHeader }}</div>
        <br>other method:
        <br>
        <ParamValue v-for="(parameter, value, index) in hourlyArrInfo" :key="index" :param="parameter" :val="value"></ParamValue>
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

const hourlyArrInfo = computed(()=> {
    var hourlyInfo = store.hourly
    var keyDate = useDate()
    for (key in hourlyInfo){
        formattedDate = keyDate.format(key, 'fullDateTime24h')
        valueArray.push({
            name: formattedDate,
            value: obj[key]
        })
    }
    return valueArray
})
// onMounted(
//     store.fetchHourly(weatherParameter)
// )

</script>
<style >
    
</style>