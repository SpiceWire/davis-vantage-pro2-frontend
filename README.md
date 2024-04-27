# Davis Vantage Pro 2 Frontend

Displays data and manages settings of Davis Vantage Pro 2 weather station. Also shows geolocation-based forecast from
United States Weather Service. 

Features or uses:
* Vue 3
* Vuetify
* Axios API
* Pinia Datastores
* NPM
* Responsive design
* Javascript and CSS
* Custom, dynamic icons

  Fully implements all endpoints of [DavisBackend](https://github.com/SpiceWire/davis-vantage-pro2-backend).

  # Current Weather
  Clicking any icon gives a 24-hour table of that variable. Icons' color changes based on values. For example, wind arrows are colored green, yellow or red based on wind speed. Temperature icons use a gradient from blue (cold) to red (hot). The forecast icon links to the US Weather forecast for the geolocation. Wind arrows show the last 5 wind readings. Polls backend at intervals for updated weather data.
  ![CurrentWeather](/images/CurrentWeather.png)

  # Hourly Data
  Displays a parameter's data for each hour of the past 24 hours.
  
  ![HourlyData](/images/ParameterHourly.png)
  
  # Past Weather
  Displays highs, lows and summaries based on a date.
  
  ![PastWeather](/images/DailyRecord1.png)
   ![PastWeather](/images/DailyRecord2.png)
  
  # Forecast
  United States Weather Service (USA only) forecast based on geolocation or address.
  
  ![Forecast](/images/Forecast.png)
  
  # Vantage Pro 2 Settings
  Get or change serial port settings
  
  ![Settings1](/images/Settings1.png)
  ![Settings2](/images/Settings2.png)
  

  # Vantage Pro 2 Testing
  Buttons for TEST, RECEIVERS, RXTEST, RXCHECK, VER and NVER
  
  ![Testing](/images/Testing.png)
  
  # Raw Data
  Binary data from the Vantage Pro 2 LOOP and LPS commands.
  
  ![CurrentData](/images/CurrentData.png)
  

  
 
