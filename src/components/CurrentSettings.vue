
<script setup>
import WebService from '../services/WebService'
import { computed, reactive, onMounted, ref, onUpdated, nextTick } from 'vue'
import ParamValue from '@/components/ParamValue.vue';

var result = reactive({})
var settingsObj = ref({})

async function getSettings() {
    result = await WebService.getSettings()
    settingsObj.value = result.data
    console.log(settingsObj.value)
}

onMounted(()=>getSettings())
</script>


<style></style>
<template >
    <div>
        <v-spacer></v-spacer>
        <v-container>
            <v-btn @click="getSettings" variant="outlined">Get COMM Settings</v-btn>
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
            <ParamValue v-for="(parameter, value) in settingsObj" :key="parameter" :param="parameter" :val="value"></ParamValue>
                
            
        </v-container>
    </div>
</template>