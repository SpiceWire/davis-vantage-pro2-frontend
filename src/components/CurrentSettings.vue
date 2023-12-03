
<script setup>
import WebService from '../services/WebService'
import { computed, reactive, onMounted, ref, onUpdated, nextTick } from 'vue'
import ParamValue from '@/components/ParamValue.vue';
import { useCommStore } from '../store/comm';

var result = reactive({})
var settingsObj = ref({})

// async function getSettings() {
//     result = await WebService.getSettings()
//     settingsObj.value = result.data
//     console.log(settingsObj.value)
// }

const store = useCommStore();
// async function getSettings(){
//     console.log("CurrentSettings ran getSettings")
//     store.fetchComm()
//         .then(response => {
//             console.log('Response is ' , response)
//             settingsObj.value = response.data
//         })
//     // settingsObj.value =store.getComm
//     console.log("CurrentSettngs.getSettings says settingsObj is ")
//     console.log(settingsObj)
// }

async function getSettings() {
    console.log("CurrentSettings is about to run fetchComm")
    result = await store.fetchComm()
        .then(response => {
            console.log('Response is ', response)
            settingsObj.value = response
        })

    // settingsObj.value = result.data

    // .then(response => {
    //         console.log('Response is ' , response)
    //         settingsObj.value = response.data
    //     })
    // store.fetchComm()
    //     .then(response => {
    //         console.log('Response is ' , response)
    //         settingsObj.value = response.data
    //     })
    // settingsObj.value =store.getComm
    console.log("CurrentSettngs.getSettings says settingsObj is ")
    console.log(settingsObj.value)
}


function runMessage() {
    console.log("currentSettings.vue is being mounted")
}

onMounted(() =>
    runMessage(),
    getSettings())
// onMounted(()=>settingsObj.value = store.getComm)
</script>


<style></style>
<template >
    <div>
        <v-spacer></v-spacer>
        <v-container>
            <v-btn @click="getSettings" variant="outlined">Refresh COMM Settings</v-btn>
            <br>
            <br>
            <v-row>
                <v-col cols="8">
                    <h2>Current Settings</h2>
                </v-col>
            </v-row>
            <br>
            <div>
                <v-row>
                    <v-col cols="6"><strong>
                            Parameter
                        </strong></v-col>
                    <v-col><strong>
                            Value
                        </strong></v-col>
                </v-row>

            </div>
            <v-row></v-row>
            <ParamValue v-for="(parameter, value, index) in settingsObj" :key="index" :param="parameter" :val="value">
            </ParamValue>
            
            <br>
           

        </v-container>
    </div>
</template>