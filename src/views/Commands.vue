<template >
    <div>
        <h2>Console Commands</h2>
    </div>
    <div>
        <v-row>
            <v-btn>Test</v-btn>
            <v-btn>RX Check</v-btn>
            <v-btn>RX Test</v-btn>
            <v-btn>Version</v-btn>
            <v-btn>Receivers</v-btn>
            <v-btn>Nver</v-btn>
        </v-row>

        <br>
        <v-row > <v-btn v-for="text,value in commandWords" :key="text" :value="value" @click="sendCommand(value)"></v-btn></v-row>
    </div>
</template>
<script setup>
import {useCommandStore} from '..store/command.js'
import {ref, computed} from 'vue'

const store = useCommandStore()

const commandWords = [
    {text:"Test", value: "TEST"},
    {text:"RX Check", value: "RXCHECK"},
    {text:"RX Test", value: "RXTEST"},
    {text:"Version" , value:"VER"},
    {text:"Receivers" , value:"RECEIVERS"},
    {text:"Nver" , value:"NVER"},
]

function sendCommand(commandWord){
    store.fetchCommand(commandWord)
}

const rawResponse = computed (()=>{
    return store.testingRawText
})

const friendlyResponse = computed (()=>{
    return store.testingFriendlyText
})

const lastCommand = computed (()=>{
    return store.lastCommandSent
})

const errorMsg = computed (()=>{
    return store.errorMessage
})

const testDescr = computed (()=>{
    return store.testingDescription
})


</script>
<style >
    
</style>