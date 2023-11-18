import { defineStore } from 'pinia'

import WebService from '../services/WebService'


export const useCommStore = defineStore('comm',  {
    state: () => ({
        comm : {},
    }),
    getters: {
        getComm(state) {
            return state.comm
        },

    },
    actions: {
          async fetchComm() {
            try {
                const newComm = await WebService.getSettings()
                this.comm = newComm.data
            }
            catch(error){
                alert("Comm store fetch error " + error)
            }
        }
    },
        
   
})