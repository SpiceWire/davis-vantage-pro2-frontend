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
                console.log("fetch commStore called. Comm is:")
                console.log(this.comm)
            }
            catch(error){
                alert("Comm store fetch error " + error)
            }
        }
    },
        
   
})