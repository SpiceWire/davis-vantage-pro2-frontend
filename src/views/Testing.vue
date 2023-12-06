<template >
    <v-container>
        <div>
        <h2>Console Commands</h2>
    </div>
    <br>
    
    <div>
        <v-row > <v-btn variant="tonal" class="ma-1 pa-1" v-for="item in commandWords" :key="item.text"  @click="runTest(item.value)">{{ item.text }}</v-btn></v-row>
        <br>
        <br>
        <br>
        <div class="pre-formatted">
        Raw resp: {{ rawResponse }} <br>
        Friendly resp: {{  friendlyResponse }}<br>
        Last command {{ lastCommandSent }}
    </div>
    </div>
    </v-container>
</template>
<script setup>
import {useCommandStore} from '../store/command';
import {ref, computed} from 'vue'

const store = useCommandStore()

const commandWords = ref([
    {text:"Test", value: "TEST"},
    {text:"RX Check", value: "RXCHECK"},
    {text:"RX Test", value: "RXTEST"},
    {text:"Version" , value:"VER"},
    {text:"Receivers" , value:"RECEIVERS"},
    {text:"Nver" , value:"NVER"},
])

function runTest(commandWord){
    console.log("Testing runTest called with ", commandWord )
    store.fetchTesting(commandWord)
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