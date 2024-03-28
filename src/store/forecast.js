import { defineStore } from 'pinia'

import WebService from '../services/WebService'

//This store is defined as a pinia Option Store 

export const useForecastStore = defineStore('forecast',  {
    state: () => ({
        forecast : [{}],
        address: {},
        addressAndForecast:{},
        
    }),
    getters: {
        getForecast(state) {
            console.log("Forecast store getForecast was called. Store thinks forecast is: ")
            console.log("forecast" , state.forecast)
            return state.forecast
        },
        getAddress(state) {
            console.log("Forecast store getAddress was called. Store thinks address is: ")
            console.log("forecast" , state.address)
            return state.address
        },
        getProperties(state){
            console.log("Forecast store getProperties was called. Store thinks properties are: ")
            var theseProperties = state.forecast.properties
            console.log(theseProperties)
            return theseProperties
        },
        getElevation(state){
            console.log("Forecast store getElevation was called. Store thinks elevaton is: ")
            var thisElevaton = state.forecast.properties
            console.log(thisElevaton)
            return thisElevaton
        },

    },
    actions: {
          async defaultForecast() {
            try {
                const forecastDataQuery = await WebService.getForecast()
                this.addressAndForecast = forecastDataQuery.data
                this.address=forecastDataQuery.data.address
                this.forecast=JSON.parse(forecastDataQuery.data.forecast)
                console.log("store.fetchForecast called. Forecast is: ", this.forecast )
            }
            catch(error){

                alert("ForecastStore fetch error: " + error)
            }
            finally{
                console.log("Store says forecast is ", this.forecast)
            }
        },
        
        async getMyForecastByLatLon(latitude, longitude){
            console.log("store.getMyForecastByLatLon called. latLon is: ", latitude + " " + longitude )
            try {const latLonQuery = await WebService.getForecastByLatLon(latitude, longitude)
                this.addressAndForecast = latLonQuery.data
                this.address=latLonQuery.data.address
                this.forecast=JSON.parse(latLonQuery.data.forecast)
                console.log("store.getMyForecastByLatLon called. forecast is: ", this.forecast )
                // console.log("store.getMyForecastByLatLon called. Hourlyforecast is: ", this.hourlyForecast )
                
            } catch (error) {
                alert("ForecastStore getMyForecastByLatLon fetch error: " + error)
            }
        },
        async getMyForecastByAddress(myStreetAddress, myCity, myState, myZip){
            console.log("store.getMyForecastByAddress called. Address is: ", myStreetAddress + myCity +  myState +  myZip)
            try {const addressQuery = await WebService.getForecastByAddress(myStreetAddress, myCity, myState, myZip)
                this.addressAndForecast = addressQuery.data
                this.address=addressQuery.data.address
                this.forecast=JSON.parse(addressQuery.data.forecast)
                console.log("store.getMyForecastByAddress called. forecast is: ", this.forecast )
                // console.log("store.getMyForecastByLatLon called. Hourlyforecast is: ", this.hourlyForecast )
                
            } catch (error) {
                alert("ForecastStore getMyForecastByAddress fetch error: " + error)
            }
        },
        async makeDefaultAddress(myStreetAddress, myCity, myState, myZip){
            console.log("store.getMyForecastByAddress called. Address is: ", myStreetAddress + myCity +  myState +  myZip)
            try {const addressQuery = await WebService.setDefaultLocationByAddress(myStreetAddress, myCity, myState, myZip)
                this.addressAndForecast = addressQuery.data
                this.address=addressQuery.data.address
                this.forecast=JSON.parse(addressQuery.data.forecast)
                console.log("store.getMyForecastByAddress called. forecast is: ", this.forecast )
                // console.log("store.getMyForecastByLatLon called. Hourlyforecast is: ", this.hourlyForecast )
                
            } catch (error) {
                alert("ForecastStore getMyForecastByAddress fetch error: " + error)
            }
        },
        async makeDefaultCoordinates(latitude, longitude){
            console.log("store.makeDefaultCoordinates called. latLon is: ", latitude + " " + longitude )
            try {const latLonQuery = await WebService.setDefaultLocationByCoordinates(latitude, longitude)
                this.addressAndForecast = latLonQuery.data
                this.address=latLonQuery.data.address
                this.forecast=JSON.parse(latLonQuery.data.forecast)
                console.log("store.getMyForecastByLatLon called. forecast is: ", this.forecast )
            } catch (error) {
                alert("ForecastStore setDefaultLocationByCoordinates fetch error: " + error)
            }
        },
    }
   
})