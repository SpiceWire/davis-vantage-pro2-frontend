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
            <v-row v-for="param, val in dayWeather" :key="val" >
                <v-col cols="6"> {{ val }}</v-col> <v-col cols="4">{{ param }}</v-col> 
            </v-row>
          

            
        </v-container>
        
        
    </div>
</template>
<script setup>
import { useRecordStore } from '@/store/record';
import {ref, reactive, computed} from 'vue';

const store = useRecordStore()

var weatherDate = reactive();
var menu= ref()


var dayWeather = computed(()=>{
    return store.getRecord
})

const btnNames = ref( [
    {text:"Today", keyword: "day", value:0},
    {text:"Yesterday", keyword: "day", value:1},
    {text:"Ereyesterday", keyword: "day", value:2},
    {text:"Three days ago", keyword: "day", value:3},
])


function getDateOffset(selectedDate) {
  const MILLS_PER_DAY = 1000 * 60 * 60 * 24;
  const today = getUTCDate(new Date.now())
  const pastDate = getUTCDate(selectedDate)
  return Math.floor((today - pastDate) / MILLS_PER_DAY);
}

function getUTCDate(validDate){
    return Date.UTC(validDate.getFullYear(),validDate.getMonth(), validDate.getDate())
}





function getPastData(keyword, offset){
    store.fetchRecord(keyword, offset)
}
</script>
<style >
    
</style>