import axios from 'axios';
import {ref, computed} from 'vue'

//generates a unique time-based number as a nonce.
function uniqueNumber() {
  return Date.parse(new Date)/1000
}

const http = axios.create({
  baseURL: "http://localhost:8080/"
});


export default {

  getWeather() {
    return http.get('/weather/' + uniqueNumber());
  },
  getNewWeather(){
    return http.get('/weather/new')
  },
  getRecord(recordType){
    return http.get
  },
  getSettings(){
    return http.get('/vp2/settings/' + uniqueNumber())
  },
  applySettings(settingsObj){
    console.log("Webservice says: Settings obj is: " , settingsObj)
    return http.post('/vp2/settings/' + uniqueNumber(), settingsObj)
  },
  getData(cmd){
    // return http.get('/vp2/currentData/${cmd}/' + uniqueNumber())
    return http.get(`/vp2/currentData/${cmd}/${uniqueNumber()}`)
  },
  getTesting(cmd){
    return http.get(`/vp2/testing/${cmd}/${uniqueNumber()}`)
  },
  getOne(id) {
    return http.get(`/topics/${id}`)
  }
  

}