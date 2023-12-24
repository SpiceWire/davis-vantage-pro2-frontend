import { defineStore } from 'pinia'

import WebService from '../services/WebService'
//This store is defined as a pinia Option Store 
export const useCommandStore = defineStore('command',  {
    state: () => ({
        command : {
            currentDataText: '',
            currentDataEvalText: '',
            testingRawText:'',
            testingFriendlyText:'',
            testingDescription:'',
            lastCommandSent:'None',
            errorMessage: 'None',

        },
    }),
    getters: {
        getCommand(state) {
            console.log("getCommand from store called. Command obj is ", commmand)
            return state.command
        },

    },
    actions: {
          async fetchTesting(commandWord) {
            try {
                console.log("store.fetchTesting called with " + commandWord)
                const response = await WebService.getTesting(commandWord)
                this.command = response.data
                console.log("store obj is ")
                console.log(this.command)
            }
            catch(error){
                alert("Store fetch error " + error)
            }
        },
        async fetchData(commandWord) {
            try {
                console.log("store.fetchData called with " + commandWord)
                const response = await WebService.getData(commandWord)
                this.command = response.data
                console.log("store obj is ")
                console.log(this.command)
            }
            catch(error){
                alert("Command store fetch error " + error.response.status)
            }
        },
        
    },
        
   
})