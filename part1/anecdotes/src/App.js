import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Anecdote = (props) => {
  return (
    <p>{props.text}</p>
  )
}

const Button = (props) => {
  return (
    <div>
    <button onClick={props.handleClick[0]}>
      vote
    </button>
    <button onClick={props.handleClick[1]}>
      next anecdote
    </button>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const nextAnecdote = () => {
    setSelected(Math.floor((Math.random() * 7)))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    const indexOfMostVotes = copy.indexOf(Math.max(...copy));
    console.log('indexOfMostVotes', indexOfMostVotes)
    setMostVotes(indexOfMostVotes)
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} />
      <p>has {votes[selected]} votes</p>
      <Button handleClick={[vote, nextAnecdote]} />
      <Header text='Anecdote with most votes' />
      <Anecdote text={anecdotes[mostVotes]} />
      <p>has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App