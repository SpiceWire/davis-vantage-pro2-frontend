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
        {{ commandSent }}
        <br>
        <br>
        <div><strong>Backend responded to command:</strong></div>
        {{ lastCommand }}
        <br>
        <br>
        <div><strong>Raw Data:</strong></div>
        {{ currentDataText }}
        <br>
        <br>
        <div><strong>Evaluation:</strong></div>
        {{ currentDataEvalText }}

    </div>
 </v-container>
    </div>
</template>
<script setup>
import { useCommandStore } from '@/store/command';
import {ref, computed} from 'vue'

const store = useCommandStore()

var commandSent= ref("")

const currentDataText = computed(()=> {
    return store.currentDataText
})

const currentDataEvalText = computed(()=> {
    return store.currentDataEvalText
})

const lastCommandSent = computed(()=> {
    return store.lastCommandSent
})

const errorMessage = computed(()=> {
    return store.errorMessage
})

const currentDataWords = ref([
    {text:"Loop", value: "LOOP"},
    {text:"LPS", value: "LPS"},
])

function getData(dataWord){
    commandSent = dataWord
    store.fetchData(dataWord)
}


onMounted(()=>{
    store.$reset
})
</script>
<style >
    
</style>