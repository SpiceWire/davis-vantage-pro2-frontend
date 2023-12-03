
<script setup>
import { useCommStore } from '../store/comm';
import { computed, onMounted, onUpdated, ref, reactive, toRaw } from 'vue'
import WebService from '@/services/WebService';

const store = useCommStore();
// var commList = new Array();
const commObj = computed(() => {
    return store.comm
})
var commItem
var commList = computed(() => {

    //below returns with  TypeError: undefined is not iterable
    // return Array.from(store.comm.commPortList)
    // return [...store.comm.commPortList]
    // return Object.values(store.comm.commPortList)
    //below is not returned as an array
    // return store.comm.commPortList
    // return Array.from( commItem in commObj.commPortList, (x)=>x)
    // const commLength=commObj.commPortList

    // return (toRaw(store.comm.commPortList))
    return store.comm.commPortList
})

const currentCommPort = computed(() => {
    return store.comm.systemPortName
})

const currentCommPortIndex = computed(() => {
    return store.comm.commPortIndex
})

const currentBaud = computed(() => {
    return store.comm.baudRate
})

const currentWriteTimeout = computed(() => {
    return store.comm.writeTimeout
})

const currentReadTimeout = computed(() => {
    return store.comm.readTimeout
})

const otherBaudList = ["COM3", "COM4"]

const baudList = [19200, 9600, 4800, 2400, 1200]
const timeoutList = [0, 10, 100, 1000, 1500, 2000, 2500, 3000]
const writeTimeoutList = [0, 10, 100, 1000, 1500, 2000, 2500, 3000]

//timeoutModeList values from fazecast jSerialComm library constant field values  https://fazecast.github.io/jSerialComm/javadoc/index.html
const timeoutModeList = ref(
    [{ text: "Nonblocking", value: 0, },
    { text: "Read blocking", value: 16 },
    { text: "Read semi-blocking", value: 1 },
    { text: "Write blocking", value: 256 },
    ]
)




var selectBaud = computed(() => {
    return baudList.indexOf(currentBaud.value)
})

var selectWrite = computed(() => {
    return timeoutList.indexOf(currentWriteTimeout.value)
})
var selectRead = computed(() => {
    return timeoutList.indexOf(currentReadTimeout.value)
})

var selectComm = ref("")



const params = reactive({
    baud: 19200,
    commPortIndex: 0,
    timeoutMode: 0,
    readTimeout: 0,
    writeTimeout: 0,
    commPortList: commList,
})
var changeSettingsClicked = ref(false)
var changeSettingsClickedRef = ref(false)
var changeSettingsClicked = computed(()=>{
    return changeSettingsClickedRef
})
var serverResponse = ref("Waiting for response...")

const settingsSuccess = reactive({ setVal: false })

function submitSettings() {
    changeSettingsClickedRef.value = true
    WebService.applySettings(params)
        .then(response => {
            if (response.status == 200) {
                console.log("Axios said call is successful.")
                settingsSuccess.setVal = true;
                serverResponse.value = "Settings changed. Server response status = " + response.status + "\n Refresh Comm Settings to confirm change"
            }
            else {
                console.log("Axios said call failed.")
                settingsSuccess.setVal = false;
                serverResponse.value  = "Settings not changed. Server response status = " + response.status 
            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("error in response")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(error.toJSON());
                
                settingsSuccess.setVal = false;
                serverResponse.value = "Settings not changed. Server response status =" + response.status + " Response data: " + response.data
            } else if (error.request) {
                // The request was made but no response was received
                console.log("Error in request")
                console.log(error.request);
                settingsSuccess.setVal = false;
                serverResponse.value = "Settings not changed. The request was made but no response was received. " +  
                "\n error.request = " + JSON.stringify(error)
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                settingsSuccess.setVal = false;
                serverResponse.value = "Settings not changed. Something happened in setting up the request that triggered an Error. " +  
                "\n error.message = " + JSON.stringify(error)
            }
            console.log(error.config);
        });


}

</script>

<style >
.chosen {
    color: red
}
</style>

<template >
    <div><v-spacer></v-spacer>
        <v-container>
            <v-btn variant="outlined" type="submit" @click="submitSettings">
                Use new settings
            </v-btn>
            <br>
            <br>
            <v-row>
                <v-col>
                    <h2>Selectable Settings</h2>
                </v-col>
            </v-row>
            <br>
            <div>
                <strong>
                    Comm port:
                </strong>
                <v-chip-group mandatory v-model="params.commPortIndex" selected-class="text-primary">
                    <v-chip v-for="comm, index in commList" :key="comm" :value="index">{{ comm }} </v-chip>
                </v-chip-group>
            </div>
            <div>
                <strong> Baud:</strong>

                <v-chip-group mandatory v-model="params.baud" selected-class="text-primary">
                    <v-chip v-for="baudVal in baudList" :value="baudVal">{{ baudVal }}</v-chip>
                </v-chip-group>
            </div>

            <div>
                <strong>Write Timeout (ms)</strong>
                <v-chip-group mandatory v-model="params.writeTimeout" selected-class="text-primary">
                    <v-chip v-for="timeout in timeoutList" :value="timeout">{{ timeout }}</v-chip>
                </v-chip-group>
            </div>
            <div>
                <strong>Read Timeout (ms)</strong>
                <v-chip-group mandatory v-model="params.readTimeout" selected-class="text-primary">
                    <v-chip v-for="timeout in timeoutList" :value="timeout">{{ timeout }}</v-chip>
                </v-chip-group>
            </div>

            <div>
                <strong>Timeout Mode</strong>
                <v-chip-group mandatory v-model="params.timeoutMode" selected-class="text-primary">
                    <v-chip v-for="mode in timeoutModeList" :value="mode.value">{{ mode.text }} </v-chip>
                </v-chip-group>
            </div>
            <br>

          
             
            <div v-show="changeSettingsClickedRef" class="settings-results">
                <div v-if="settingsSuccess.setVal == true"><v-icon icon="fa-solid fa-check" color="green"></v-icon></div>
                <div v-else><v-icon icon="fa-solid fa-x" color="red"></v-icon></div>
                <v-textarea label="Server Response" variant="outlined" :model-value="serverResponse"></v-textarea>
            </div>

        </v-container>


    </div>
</template>