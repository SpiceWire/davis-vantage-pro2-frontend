import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useRecordStore = defineStore('record',  {
    state: () => ({
        record : {},
    }),
    getters: {
        getRecord(state) {
            console.log("Record store getRecord was called")
            return state.record
        },
    },
    actions: {
          async fetchRecord(recordType) {
            try {
                const recordQuery = await WebService.getRecord(recordType)
                this.record = recordQuery.data
            }
            catch(error){
                alert("Store fetch error " + error)
            }
        }
    },
        
   
})