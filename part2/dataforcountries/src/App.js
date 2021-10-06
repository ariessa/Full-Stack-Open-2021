import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Query from './components/Query'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ query, setQuery ] = useState('')
  const [ show, setShow ] = useState(false)
  const [ showIndex, setShowIndex ] = useState(0)
  const [ capital, setCapital ] = useState('Helsinki')
  const [ temperature, setTemperature ] = useState(0)
  const [ windSpeed, setWindSpeed ] = useState(0)
  const [ windDirection, setWindDirection ] = useState(0)
  const [ weatherIcon, setWeatherIcon ] = useState('')

  const hook = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
    
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
      .then(response => {
        console.log('weather promise fulfilled')
        console.log('weather', response.data)
        setTemperature(response.data.current.temperature)
        setWindSpeed(response.data.current.wind_speed)
        setWindDirection(response.data.current.wind_dir)
        setWeatherIcon(response.data.current.weather_icons[0])
        console.log('temp', response.data.current.temperature)
        console.log('speed', response.data.current.wind_speed)
        console.log('dir', response.data.current.wind_dir)
        console.log('icon', response.data.current.weather_icons[0])
      })
  }

  useEffect(hook, [capital])

  if (capital !== '') {
    console.log('temperature', temperature)
    console.log('api key', process.env.REACT_APP_API_KEY)
  }

  const handleQueryChange = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  return (
    <div>
      <Query query={query} handleQueryChange={handleQueryChange} />

      <Countries 
        query={query} 
        country={countries} 
        show={show} 
        setShow={setShow} 
        index={showIndex}
        setShowIndex={setShowIndex} 
        capital={capital}
        setCapital={setCapital}
        temperature={temperature}
        windSpeed={windSpeed}
        windDirection={windDirection}
        weatherIcon={weatherIcon}
      />

    </div>
  )
}

export default App