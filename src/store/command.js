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
                alert("Store fetch error " + error)
            }
        },
        
    },
        
   
})