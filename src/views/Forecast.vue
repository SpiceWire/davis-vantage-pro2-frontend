<template>
    <div>
        
    </div>
</template>
<script setup>
import { useForecastStore } from '@/store/forecast';
import { onUnmounted, onMounted, computed } from 'vue'

const store = useForecastStore();

var forecast=computed(()=>{
  return store.forecast
})


</script>
<style >
    
</style>