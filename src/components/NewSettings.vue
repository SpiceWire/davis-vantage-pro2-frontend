
<script setup>
import { useCommStore } from '../store/comm';
import { computed, onMounted, onUpdated, ref, reactive, toRaw} from 'vue'
import WebService from '@/services/WebService';

const store = useCommStore();
// var commList = new Array();
const commObj = computed(() =>{
    return store.comm
})
var commItem
var commList = computed(()=>{
    
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

const currentCommPort = computed(() =>{
    return store.comm.systemPortName
})

const currentCommPortIndex = computed(() =>{
    return store.comm.commPortIndex
})

const currentBaud = computed(() =>{
    return store.comm.baudRate
})

const currentWriteTimeout = computed(() =>{
    return store.comm.writeTimeout
})

const currentReadTimeout = computed(() =>{
    return store.comm.readTimeout
})

const otherBaudList = ["COM3", "COM4"]

const baudList =[19200, 9600, 4800, 2400, 1200]
const timeoutList = [0, 10 ,100, 1000, 1500, 2000, 2500, 3000]
const writeTimeoutList = [0, 10 ,100, 1000, 1500, 2000, 2500, 3000]

//timeoutModeList values from fazecast jSerialComm library constant field values  https://fazecast.github.io/jSerialComm/javadoc/index.html
const timeoutModeList = ref(
    [{text: "Nonblocking", value: 0,},
    {text:"Read blocking" , value: 16 },
    {text:"Read semi-blocking" , value: 1},
    {text: "Write blocking", value: 256},
     ]
)
// const commListCopy = commList.slice()
// onMounted(()=>{
//   console.log ("commlst is array? " + Array.isArray(commList))
//   console.log(commList)
//   console.log(JSON.parse(commList))
// console.log ("baudlist is array? " + Array.isArray(baudList))  
// console.log ("otherBaudList is array? " + Array.isArray(otherBaudList))  
// })
// console.log("commlist is")
// console.log(commList)
// console.log("commlist.value  is")
// console.log(commList.value)
// console.log("commObj =")
// console.log(commObj)
// console.log("commObj value =")
// console.log(commObj.value)
// console.log("comportList length = " , commObj.commPortList)
// console.log("commList[0] is ", commList[0])
// console.log("rawComList is ", toRaw(commList))
// console.log ("baudlist is array? " , Array.isArray(baudList)) 
// console.log ("commlst is array? " , Array.isArray(commList))

// const newCommList = [...commList]
// console.log(JSON.parse(Object.values[(commList)]))
// console.log("comListCopy is "), commListCopy
// console.log ("comListCopy is array? " , Array.isArray(commListCopy))
// function useSettings(){
//     return ""
// }
// async function cssSelected(baudVal){
//     console.log("cssSelected triggered")
//     console.log(baudVal, currentBaud.value)
//     if(currentBaud==baudVal){
//         console.log("cssSelected chosen")
//         return "chosen"
//     }
// }

// const cssSelected = computed((baudVal)=>{
//    return baudVal == currentBaud ? "chosen" : ""
//     })
// var selectBaud = 3
// var selectBaud = baudList.findIndex((element) => element==currentBaud);

 var selectBaud = computed(()=>{
    return baudList.indexOf(currentBaud.value)
})

var selectWrite= computed(()=>{
    return timeoutList.indexOf(currentWriteTimeout.value)
})
var selectRead= computed(()=>{
    return timeoutList.indexOf(currentReadTimeout.value)
})

// var selectComm  = commList[currentCommPortIndex] 
// var selectComm  = commList[0] 
var selectComm = ref("")
// var selectComm  = computed({
//     get() {
//         return currentCommPortIndex
//     },
//     set() {

//     }   
// })

// var selectComm = commList.indexOf(currentCommPort.value)
//  var selectComm = computed(()=>{
//     return commList.indexOf(currentCommPort)
//  })


const params = reactive({
    baud: 19200,
    commPortIndex:0,
    timeoutMode:0,
    readTimeout:0,
    writeTimeout:0,
    commPortList:commList,
})

function cssSelected(baudVal) {
    console.log("cssSelected triggered")
    console.log(baudVal, currentBaud.value)
    if(baudVal==currentBaud){
        console.log("css found!")
        return "chosen"
    }

    
}
const serverResponse = "Waiting for response..."
function submitSettings(){
    WebService.applySettings(params)
        .then(response =>{
            if(response.status== 200){
                console.log("Axios said call is successful.")
                responseIcon = "fa-check"
                serverResponse="Settings changed. Server response status = ", response.status ,"\n Click Get Comm Settings to confirm"
            }
            else {
                console.log("Axios said call failed.")
                serverResponse="Settings not changed. Server response status = ", response.status 
            }
        })
        
    
}

</script>

<style >
    .chosen{
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
        <div >
            <strong>
                 Comm port: 
            </strong>
            <v-chip-group  mandatory v-model="params.commPortIndex" selected-class="text-primary">
            <v-chip v-for="comm, index in commList" :key="comm" :value="index">{{ comm }} </v-chip>
            </v-chip-group>
        </div>
        <div>
            <strong> Baud:</strong>
           
            <v-chip-group 
                mandatory
                v-model="params.baud"
                selected-class="text-primary">
                <v-chip  v-for="baudVal in baudList" :value="baudVal" >{{ baudVal }}</v-chip>
            </v-chip-group>
        </div>

        <div>
            <strong>Write Timeout (ms)</strong>
            <v-chip-group 
                mandatory
                v-model="params.writeTimeout"    
                selected-class="text-primary">
                <v-chip v-for="timeout in timeoutList" :value="timeout" >{{ timeout }}</v-chip>
            </v-chip-group>
        </div>
        <div>
            <strong>Read Timeout (ms)</strong>
            <v-chip-group
                mandatory
                v-model="params.readTimeout"   
                selected-class="text-primary">
                <v-chip v-for="timeout in timeoutList" :value="timeout">{{ timeout }}</v-chip>
            </v-chip-group>
        </div>
     
        <div>
            <strong>Timeout Mode</strong>
            <v-chip-group
                mandatory
                v-model="params.timeoutMode"   
                selected-class="text-primary">
                <v-chip v-for="mode in timeoutModeList" :value="mode.value">{{ mode.text }}  </v-chip>
            </v-chip-group>
        </div>

  
        <div class="settings-results">
            <v-icon icon="fa-solid fa-check" color="green"></v-icon>
            <v-textarea label="Server Response" variant="outlined"></v-textarea>
        </div> 

     </v-container>   
     
        
    </div>
</template>