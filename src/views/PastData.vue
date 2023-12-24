<template >
    <div>
        <v-container>
            <h2>Past Weather</h2>
            <br>
            <h3>Click a button to get past data</h3>
            <br>
            <v-chip v-for="name in btnNames" :value="name.value" @click="getPastData(name.keyword, name.value)">{{ name.text }}</v-chip>
            <br>
            <br>
            <div>
                <strong>Weather:</strong>
            </div>
            <v-chip-group>
                <v-chip v-for="param, val in dayWeather" :key="param" :value="index">{{ param }}{{ val }}</v-chip>
            </v-chip-group>

            Accum rain: {{ accumRain }}
        </v-container>
        
        
    </div>
</template>
<script setup>
import { useRecordStore } from '@/store/record';
import {ref, computed} from 'vue';

const store = useRecordStore()

var accumRain = computed(()=>{
    return store.record.totalRain
})
var dayWeather = computed(()=>{
    return store.getRecord
})

const btnNames = ref( [
    {text:"Today", keyword: "day", value:0},
    {text:"Yesterday", keyword: "day", value:1},
    {text:"Ereyesterday", keyword: "day", value:2},
    {text:"Three days ago", keyword: "day", value:3},
])

function getPastData(keyword, offset){
    store.fetchRecord(keyword, offset)
}
</script>
<style >
    
</style>