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
          async fetchCommand(commandWord) {
            try {
                const response = await WebService.postCommand(commandWord)
                this.command = response.data
            }
            catch(error){
                alert("Store fetch error " + error)
            }
        }
    },
        
   
})