
<script setup>
import WebService from '../services/WebService'
import { computed, reactive, onMounted, ref, onUpdated, nextTick } from 'vue'

var result = reactive({})
var settingsObj = ref({})

async function getSettings() {
    result = await WebService.getSettings()
    settingsObj.value = result.data
    console.log(settingsObj.value)
}

</script>


<style></style>
<template >
    <div>
        <button @click="getSettings">GetSettings</button>
        <br>

        {{ settingsObj }}
        <br>

        <div v-for="(parameter, value) in settingsObj">

            {{ value }}
            {{ parameter }}
        </div>
        <div width="600px">
            <v-table density="compact" width="600px">
                <thead>
                    <tr>
                        <th class="text-left">
                            Parameter
                        </th>
                        <th class="text-left">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(parameter, value) in settingsObj" :key="parameter">

                        <td>{{ value }}</td>
                        <td>{{ parameter }}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
        <v-spacer></v-spacer>
        <div v-for="(parameter, value) in settingsObj" :key="parameter" :param="parameter" :val="value">

        </div>

    </div>
</template>