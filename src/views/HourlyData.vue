<template >
    <div>
        <div>Parameter name : {{ hourlyHeader }}</div>
        <br>
        <div><HourlyValues></HourlyValues></div>
    </div>
</template>


<script setup>

import HourlyValues from '../components/HourlyValues';
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'
import { useHourlyStore } from '../store/hourly';

const store = useHourlyStore();

// const props = defineProps(
//     ["weatherParameter"]
// )
const hourlyHeader = computed(() => {
    return store.hourlyHeaderName
})

// onMounted(
//     store.fetchHourly(weatherParameter)
// )

</script>
<style >
    
</style>