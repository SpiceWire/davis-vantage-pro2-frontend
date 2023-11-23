
<script setup>
import { useCommStore } from '../store/comm';
import { computed, onMounted, onUpdated, ref, reactive, toRaw} from 'vue'

const store = useCommStore();

const commObj = computed(() =>{
    return store.comm
})
var commItem
const commList = computed(()=>{
    
    //below returns with  TypeError: undefined is not iterable
    // return Array.from(store.comm.commPortList)
    // return [...store.comm.commPortList]
    // return Object.values(store.comm.commPortList)
    //below is not returned as an array
    // return store.comm.commPortList
    // return Array.from( commItem in commObj.commPortList, (x)=>x)
    // const commLength=commObj.commPortList
    
    return (toRaw(store.comm.commPortList))
})
const currentCommPort = computed(() =>{
    return store.comm.systemPortName
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

// onMounted(()=>{
//   console.log ("commlst is array? " + Array.isArray(commList))
//   console.log(commList)
//   console.log(JSON.parse(commList))
// console.log ("baudlist is array? " + Array.isArray(baudList))  
// console.log ("otherBaudList is array? " + Array.isArray(otherBaudList))  
// })
console.log("commlist is")
console.log(commList)
console.log("commlist.value  is")
console.log(commList.value)
console.log("commObj =")
console.log(commObj)
console.log("commObj value =")
console.log(commObj.value)
console.log("comportList length = " + commObj.commPortList)
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

// var selectComm = commList.indexOf(currentCommPort.value)
//  var selectComm = computed(()=>{
//     return commList.indexOf(currentCommPort)
//  })


function cssSelected(baudVal) {
    console.log("cssSelected triggered")
    console.log(baudVal, currentBaud.value)
    if(baudVal==currentBaud){
        console.log("css found!")
        return "chosen"
    }

    
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
        <v-btn variant="outlined">
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
            <v-chip-group  v-model="selectComm" selected-class="text-primary">
            <v-chip v-for="comm in commList" :key="comm" :value="comm">{{ comm }} </v-chip>
            </v-chip-group>
        </div>
        <div>
            <strong> Baud:</strong>
           
            <v-chip-group 
                v-model="selectBaud"
                selected-class="text-primary">
                <v-chip  v-for="baudVal in baudList" :key="baudVal" :value="baudVal" >{{ baudVal }}</v-chip>
            </v-chip-group>
        </div>

        <div>
            <strong>Write Timeout (ms)</strong>
            <v-chip-group selected-class="text-primary">
                <v-chip v-for="timeout in timeoutList" color="red">{{ timeout }}</v-chip>
            </v-chip-group>
        </div>
        <div>
            <strong>Read Timeout (ms)</strong>
            <v-chip-group selected-class="text-primary">
                <v-chip v-for="timeout in timeoutList">{{ timeout }} </v-chip>
            </v-chip-group>
        </div>
     
        <div>
            <strong>test</strong>
                <v-chip color="red">Testing</v-chip> 
            
        </div>
  
        <div>

            <v-select label="Baud"
            :items="baudList">
                
            </v-select>
        </div> 
selectComm = {{ selectComm}} <br>
systemportName = {{ currentCommPort }} <br>
commList = {{ commList }}
     </v-container>   
     
        
    </div>
</template>