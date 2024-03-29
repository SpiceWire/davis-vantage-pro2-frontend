
<script setup>
import { reactive, onMounted, ref } from 'vue'
import ParamValue from '@/components/ParamValue.vue';
import { useCommStore } from '../store/comm';

var result = reactive({})
var settingsObj = ref({})



const store = useCommStore();

//todo 
async function getSettings() {
    result = await store.fetchComm()
        .then(response => {
            settingsObj.value = response
        })
}

onMounted(() =>
    getSettings())

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