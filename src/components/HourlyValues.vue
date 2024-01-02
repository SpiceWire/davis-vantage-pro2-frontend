<template >
    <div>
        <v-row v-for="rawTime, dataValue in hourlyObj" :key="rawTime" :value="dataValue">
        <v-col>{{ hourlyObj.rawTime }}</v-col><br><v-col>{{ hourlyObj.dataValue }}</v-col>
        </v-row>
    </div>
</template>
<script setup>
import { useHourlyStore } from '../store/hourly'
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'

const store = useHourlyStore();

const hourlyObj = computed(() => {
    return store.hourly
})


</script>
<style >
    
</style>