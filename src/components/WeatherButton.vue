<template>
    <div>
        <button class = "updateWeather" @click="updateWeather"></button>
    </div>
</template>
<script>
import WebService from '../services/WebService';
export default {
    methods: {
        updateWeather(){
            WebService.getNewWeather();
        }
    },
}
</script>
<style >
    
</style>