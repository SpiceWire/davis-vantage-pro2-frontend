<template >
    <div>
        <div>Parameter name : {{ weatherParameter }}</div>
        <br>
        <div><HourlyValues></HourlyValues></div>
    </div>
</template>


<script setup>

import HourlyValues from '@/components/HourlyValues.vue';
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'
import { useHourlyStore } from '@/store/hourly';

const store = useHourlyStore();

const props = defineProps(
    ["weatherParameter"]
)

onMounted(
    store.fetchHourly(weatherParameter)
)

</script>
<style >
    
</style>