import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useHourlyStore = defineStore('hourly',  {
    state: () => ({
        hourly : {},
    }),
    getters: {
        getHourly(state) {
            console.log("Hourly store getHourly was called")
            return state.hourly
        },
    },
    actions: {
          async fetchHourly(headerName) {
            try {
                console.log("store.fetchHHourly called with ", headerName)
                const hourlyDataQuery = await WebService.getHourly(headerName)
                this.hourly = hourlyDataQuery.data
            }
            catch(error){

                alert("HourlyStore fetch error: " + error)
            }
        }
    },
        
   
})