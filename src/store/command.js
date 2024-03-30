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
            return state.command
        },

    },
    actions: {
          async fetchTesting(commandWord) {
            try {
                const response = await WebService.getTesting(commandWord)
                this.command = response.data
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
                alert("Command store fetch error " + error)
            }
        },
        
    },
        
   
})