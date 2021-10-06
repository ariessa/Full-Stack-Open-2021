import React from 'react'
import Country from './Country'

const Countries = (props) => {
  console.log('countries render', props)

  const countriesToShow = props.query === ''
    ? props.country
    : props.country.filter(c => 
      c.name.common.toLowerCase().indexOf(props.query.toLowerCase()) !== -1)

  console.log('countriesToShow', countriesToShow)

  if (countriesToShow.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  else if (countriesToShow.length === 1) {
    props.setCapital(countriesToShow[0].capital)
    return (
      <Country 
        countries={countriesToShow} 
        index={0} 
        capital={props.capital}
        temperature={props.temperature}
        windSpeed={props.windSpeed}
        windDirection={props.windDirection}
        weatherIcon={props.weatherIcon}
      />
    )
  }

  // Else if countriesToShow > 1 but below 11
  else {
    return (
      <div>
        {countriesToShow.map((country, index) => 
          <div>
            <p id={index}>
              {country.name.common} 
              <button id={index} onClick={() => {
                if (props.show) {
                  props.setShow(false)
                }
                else {
                  props.setShowIndex(index)
                  props.setCapital(country.capital)
                  props.setShow(true)
                }
              }}>
                {(index === props.index) && props.show ? 'close' : 'show'}
              </button>
            </p>
          </div>
        )}
        {props.show ?
          <Country 
            countries={countriesToShow} 
            index={props.index} 
            capital={props.capital} 
            temperature={props.temperature} 
            windSpeed={props.windSpeed}
            windDirection={props.windDirection}
            weatherIcon={props.weatherIcon}
          />
          : ''
        }
      </div>
    )
  }
}

export default Countries