<template >
    <v-container>
        <div>
        <h2>Testing Commands</h2>
            <br>
        <h3>Click a test button to run a test:</h3>    
    </div>
    <br>
    
    <div>
        <v-row > <v-btn variant="tonal" class="ma-1 pa-1" v-for="item in testingWords" :key="item.text"  @click="runTest(item.value)">{{ item.text }}</v-btn></v-row>
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
        <div ><strong>Raw response:</strong>
         
        <div>
            {{ rawResponse }}
        </div> 
        <br>
        <div><strong>Friendly response:</strong>
         
         <div class="pre-formatted">{{  friendlyResponse }}</div><br>   
        </div>
        
        
    </div>
    </div>
    </v-container>
</template>
<script setup>
import {useCommandStore} from '../store/command';
import {ref, computed} from 'vue'

const store = useCommandStore()

var commandSent = ref()

const testingWords = ref([
    {text:"Test", value: "TEST"},
    {text:"RX Check", value: "RXCHECK"},
    {text:"RX Test", value: "RXTEST"},
    {text:"Version" , value:"VER"},
    {text:"Receivers" , value:"RECEIVERS"},
    {text:"Nver" , value:"NVER"},
])

function runTest(testWord){
    commandSent = testWord
    store.fetchTesting(testWord)
}

const rawResponse = computed (()=>{
    return store.command.testingRawText
})

const friendlyResponse = computed (()=>{
    return store.command.testingFriendlyText
})

const lastCommand = computed (()=>{
    return store.command.lastCommandSent
})

const errorMsg = computed (()=>{
    return store.command.errorMessage
})

const testDescr = computed (()=>{
    return store.command.testingDescription
})



</script>
<style >
.pre-formatted{
    white-space:pre;
}
</style>