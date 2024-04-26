<template >
    <div>
        <v-container>
            <v-btn prepend-icon="fa-solid fa-arrow-left" variant="flat" href="/weather">Weather</v-btn>
        <br>
        <h2>Parameter "{{ hourlyHeader }}" over past 24 hours:</h2>
        <br>
        <v-row>
            <v-col cols="6">
              <h3>Date and time:</h3>  
            </v-col>
            <v-col>
                <h3>Value</h3>
            </v-col>
            </v-row>
        
        <ParamValue v-for="(value, key) in hourlyArrayInfo" :key="key" :param="value.value" :val="value.key"></ParamValue>
  
        <br>
        <v-btn prepend-icon="fa-solid fa-arrow-left" variant="flat" href="/weather">Weather</v-btn>
        </v-container>

    </div>
</template>


<script setup>

import ParamValue from '@/components/ParamValue.vue';
import { computed } from 'vue'
import { useHourlyStore } from '../store/hourly';


const store = useHourlyStore();

const hourlyHeader = computed(() => {
    return store.hourlyHeaderName
})

const hourlyArrayInfo = computed(() => {
    var valueArray = []
    var hourlyRaw = store.hourly

    for (var initialKey in hourlyRaw){
        var theISODate = new Date(initialKey).toISOString()
        valueArray.push({
            key:theISODate,
            value: hourlyRaw[initialKey]
        })
    }

    var sortedDates = valueArray.sort(function (a, b) {
            return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
        });

    sortedDates.forEach((element) =>
        element.key = new Date(element.key).toLocaleString("en", {dateStyle:"short", timeStyle:"short"})
    )  

    return sortedDates
})




</script>
<style >
    
</style>