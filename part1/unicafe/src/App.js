import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Button = ({ handleClick}) => {
  return (
    <div>
      <button onClick={handleClick[0]}>
        good
      </button>
      <button onClick={handleClick[1]}>
        neutral
      </button>
      <button onClick={handleClick[2]}>
        bad
      </button>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <p>
        {text} {value} %
      </p>
    )
  }
  else {
    return (
      <p>
        {text} {value}
      </p>
    )
  }
}

// a proper place to define a component
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tr>
          <td>good</td>
          <td>
            <StatisticLine value={props.good} />
          </td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>
            <StatisticLine value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>bad</td>
          <td>
            <StatisticLine value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>all</td>
          <td>
            <StatisticLine value={props.good + props.neutral + props.bad} />
          </td>        
        </tr>
        <tr>
          <td>average</td>
          <td>
            <StatisticLine value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          </td>
        </tr>
        <tr>
          <td>positive</td>
          <td>
            <StatisticLine value={props.good / (props.good + props.neutral + props.bad) * 100} />
          </td>
        </tr>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={[handleGoodClick, handleNeutralClick, handleBadClick]} />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App