<template >
    <div>
 <v-container>
    <div>
        <h2>Current Data</h2>
        <br>
        <h3>Click a button to get current data</h3>
    </div>
    <br>
    <div>
        <v-row>
            <v-btn variant="tonal" class="ma-1 pa-1" v-for="item in currentDataWords" :key="item.text"  @click="getData(item.value)">{{ item.text }}</v-btn>
        </v-row>
        <br>
        <br>
        <div><strong>Command Sent:</strong></div>
        {{ dataCommandSent }}
        <br>
        <br>
        <div><strong>Backend responded to command:</strong></div>
        {{ lastCommandSent }}
        <br>
        <br>
        <div><strong>Raw Data:</strong></div>
        {{ currentDataInfo }}
        <br>
        <br>
        <div><strong>Evaluation:</strong></div>
        {{ currentDataEval }}

    </div>
 </v-container>
    </div>
</template>
<script setup>
import { useCommandStore } from '@/store/command';
import {ref, computed, onMounted} from 'vue'

const store = useCommandStore()

var dataCommandSent= ref()

const currentDataInfo = computed(()=> {
    return store.command.currentDataText
})

const currentDataEval= computed(()=> {
    return store.command.currentDataEvalText
})

const lastCommandSent = computed(()=> {
    return store.command.lastCommandSent
})

const errorMessage = computed(()=> {
    return store.command.errorMessage
})

const currentDataWords = ref([
    {text:"Loop", value: "LOOP"},
    {text:"LPS", value: "LPS"},
])

function getData(dataWord){
    dataCommandSent = dataWord
    store.fetchData(dataWord)
}


// onMounted(()=>{
//     store.$reset
// })
</script>
<style >
    
</style>