<script setup>
import { useClimaStore } from '../store/clima';
import { computed, onBeforeMount, ref, reactive} from 'vue'
import ChyronMessage from './ChyronMessage.vue';
const store= useClimaStore()

const tenMinAvgWindSpeed = computed(() =>{
    return store.clima.tenMinAvgWindSpeed
})

const twoMinAvgWindSpeed = computed(() =>{
    return store.clima.twoMinAvgWindSpeed
})

const tenMinuteWindGust = computed(() =>{
    return store.clima.tenMinuteWindGust
})

const wind = computed(() =>{
    return store.clima.windSpeed
})

//keep it ref
// const chyronText = ref([
//     "Ten minute average wind speed: " + tenMinAvgWindSpeed.value,
//     "Two minute average wind speed: " + twoMinAvgWindSpeed.value,
//     "Ten minute wind gust: " + tenMinuteWindGust.value
// ])
// const chyronText = () => [
//     "   Ten minute average wind speed: " + tenMinAvgWindSpeed.value,
//     "   Two minute average wind speed: " + twoMinAvgWindSpeed.value,
//     "   Ten minute wind gust: " + tenMinuteWindGust.value
// ]
const chyronText = computed(() => {
    return [
    "   Ten minute average wind speed: " + tenMinAvgWindSpeed.value,
    "   Two minute average wind speed: " + twoMinAvgWindSpeed.value,
    "   Ten minute wind gust: " + tenMinuteWindGust.value,
    " wind: " + wind.value
]})


</script>

<template>
    <div class="chryContainer">
<ChyronMessage id="chyronID" v-for="(chry, index) in chyronText" 
    :key="index" 
    class="chyron" 
    :chryMessage="chry"/>
   </div>
</template>

<style scoped>
.info{
    margin-right: 20px;
}    

.chryContainer{
    width: 210%;
    display: flex;
   flex-direction: column;
   flex-flow: row;
   flex-wrap: nowrap;
   
   animation: moveChyron 15s linear infinite;

}
#chyronID {
    width: 100%;
    display: inline-block;
    flex-grow: 1;
    position:relative;
    height: 4em;
    font-size: 32px;
    padding-top: 3em;
    padding-left: 10em;
    
  }
  @keyframes moveChyron {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  
</style>