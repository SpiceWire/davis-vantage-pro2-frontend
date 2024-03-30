import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useHourlyStore = defineStore('hourly',  {
    state: () => ({
        hourly : {},
        hourlyHeaderName : String,
    }),
    getters: {
        getHourly(state) {

            return state.hourly
        },
        getHourlyHeader(state){

            return state.hourlyHeaderName
        },
    },
    actions: {
          async fetchHourly(headerName) {
            this.hourlyHeaderName = headerName
            try {

                const hourlyDataQuery = await WebService.getHourly(headerName)
                this.hourly = hourlyDataQuery.data
                
            }
            catch(error){
                alert("HourlyStore fetch error: " + error)
            }

        },
      
    },
        
   
})