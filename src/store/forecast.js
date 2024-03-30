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
            return state.forecast
        },
        getAddress(state) {
            return state.address
        },
        getProperties(state){
            var theseProperties = state.forecast.properties
            return theseProperties
        },
        getElevation(state){
            var thisElevaton = state.forecast.properties
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
            }
            catch(error){
                alert("ForecastStore fetch error: " + error)
            }
        },
        
        async getMyForecastByLatLon(latitude, longitude){

            try {const latLonQuery = await WebService.getForecastByLatLon(latitude, longitude)
                this.addressAndForecast = latLonQuery.data
                this.address=latLonQuery.data.address
                this.forecast=JSON.parse(latLonQuery.data.forecast)
            } catch (error) {
                alert("ForecastStore getMyForecastByLatLon fetch error: " + error)
            }
        },
        async getMyForecastByAddress(myStreetAddress, myCity, myState, myZip){
            try {const addressQuery = await WebService.getForecastByAddress(myStreetAddress, myCity, myState, myZip)
                this.addressAndForecast = addressQuery.data
                this.address=addressQuery.data.address
                this.forecast=JSON.parse(addressQuery.data.forecast)
            } catch (error) {
                alert("ForecastStore getMyForecastByAddress fetch error: " + error)
            }
        },
        async makeDefaultAddress(myStreetAddress, myCity, myState, myZip){
            try {const addressQuery = await WebService.setDefaultLocationByAddress(myStreetAddress, myCity, myState, myZip)
                this.addressAndForecast = addressQuery.data
                this.address=addressQuery.data.address
                this.forecast=JSON.parse(addressQuery.data.forecast)
            } catch (error) {
                alert("ForecastStore getMyForecastByAddress fetch error: " + error)
            }
        },
        async makeDefaultCoordinates(latitude, longitude){
            try {const latLonQuery = await WebService.setDefaultLocationByCoordinates(latitude, longitude)
                this.addressAndForecast = latLonQuery.data
                this.address=latLonQuery.data.address
                this.forecast=JSON.parse(latLonQuery.data.forecast)
            } catch (error) {
                alert("ForecastStore setDefaultLocationByCoordinates fetch error: " + error)
            }
        },
    }
   
})