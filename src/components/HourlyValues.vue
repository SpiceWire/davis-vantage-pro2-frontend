<template >
    <div>
        {{ hourlyHeader }}
        values here:
        
        <v-row v-for="rawTime, dataValue in hourlyArr" :key="rawTime" :value="dataValue">
        <v-col>{{ hourlyArr.rawTime }}</v-col><br><v-col>{{ hourlyArr.dataValue }}</v-col>
        </v-row>
    </div>
</template>
<script setup>
import { useHourlyStore } from '../store/hourly'
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'

const store = useHourlyStore();

const hourlyArr = computed(() => {
    const tempHourly=store.hourly
    console.log("HourlyValues.vue thinks hourly value is ", tempHourly)
    return store.hourly
})

const hourlyHeader = computed(() => {
    return store.hourlyHeaderName
})

</script>
<style >
    
</style>