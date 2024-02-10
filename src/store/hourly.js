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
            console.log("Hourly store getHourly was called")
            return state.hourly
        },
        getHourlyHeader(state){
            console.log("hourly store getHourlyHeader was called")
            return state.hourlyHeaderName
        },
    },
    actions: {
          async fetchHourly(headerName) {
            this.hourlyHeaderName = headerName
            console.log("Store says header name is " + this.hourlyHeaderName)
            try {
                console.log("store.fetchHHourly called with ", headerName)
                const hourlyDataQuery = await WebService.getHourly(headerName)
                this.hourly = hourlyDataQuery.data
                
            }
            catch(error){

                alert("HourlyStore fetch error: " + error)
            }
            finally{
                console.log("Store says header name is " + this.hourlyHeaderName)
                console.log("Store says hourly is ", this.hourly)
            }
        },
      
    },
        
   
})