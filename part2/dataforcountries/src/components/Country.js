import React from 'react'

const Country = (props) => {
  const countries = props.countries
  const index = props.index
  const temperature = props.temperature
  const windSpeed = props.windSpeed
  const windDirection = props.windDirection
  const weatherIcon = props.weatherIcon

  console.log('temperature here', temperature)

  return (
    <div>
      <div>
        <h1>{countries[index].name.common}</h1>
        <p>capital {countries[index].capital}</p>
        <p>population {countries[index].population}</p>
      </div>
      <div>
        <h2>Spoken languages</h2>
        <ul>
            {Object.keys(countries[index].languages).map(key =>
              <li>{countries[index].languages[key]}</li>
            )}
          </ul>
        <img 
          src={countries[index].flags.png} 
          alt={`${countries[index].name.common}'s flag`} />
      </div>
      <div>
        <h2>Weather in {countries[index].capital}</h2>
        <p><strong>temperature</strong> {temperature} Celsius</p>
        <img 
          src={weatherIcon} 
          alt={`Current weather icon for ${countries[index].capital}`} />
        <p><strong>wind</strong> {windSpeed} mph direction {windDirection}</p>
      </div>
    </div>  
  )
}

export default Country