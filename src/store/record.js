import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useRecordStore = defineStore('record',  {
    state: () => ({
        record : {},
    }),
    getters: {
        getRecord(state) {
            return state.record
        },
    },
    actions: {
          async fetchRecord(recordType, numDays) {
            try {
                const recordQuery = await WebService.getRecord(recordType, numDays)
                this.record = recordQuery.data
            }
            catch(error){

                alert("Record store fetch error: " + error)
            }
        }
    },
        
   
})