import { defineStore } from 'pinia'

import WebService from '../services/WebService'

export const useCommandStore = defineStore('command',  {
    state: () => ({
        command : {
            currentDataText: '',
            currentDataEvalText: '',
            testingRawText:'',
            testingFriendlyText:'',
            testingDescription:'',
            lastCommandSent:'',
            errorMessage: '',

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
                const response = await WebService.getData(commandWord)
                this.command = response.data
            }
            catch(error){
                alert("Store fetch error " + error)
            }
        },
        
    },
        
   
})