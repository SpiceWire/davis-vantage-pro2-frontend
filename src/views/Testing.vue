<template >
    <div>
        <h2>Console Commands</h2>
    </div>
    <br>
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
        <br>
        <v-row > <v-btn v-for="item in commandWords" :key="item.text"  @click="runTest(item.value)">{{ item.text }}</v-btn></v-row>
        <br>
        <br>
        <br>
        Raw resp: {{ rawResponse }} <br>
        Friendly resp: {{  friendlyResponse }}<br>
        Last command {{ lastCommandSent }}
    </div>
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
    
</style>