import React from 'react';

const Course = (props) => {
  console.log('props', props)
  return(
    <div>
        <Title />
      {props.course.map((item) =>
        <div key={item.course}>
        <Header course={item} />
        {item.parts.map((part) =>
          <>
          <Content key={part.parts} parts={part} />
          </>
        )}
        <Total parts={item} />
        </div>
      )}
    </div>
  )
}

const Title = () => {
    return(
      <div>
        <h1>Web development curriculum</h1>
      </div>
    )
}

const Header = (props) => {
  console.log('header', props)
  return(
    <div>
      <h2>{props.course.name}</h2>
    </div>
  )
}

const Content = (props) => {
  console.log('content', props)
  return(
    <div>
      <Part part={props.parts.name} exercises={props.parts.exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log('total', props.parts.parts)
  const reducer = (s, p) => s + p.exercises
  const total = props.parts.parts.reduce(reducer, 0)
  console.log('total val', total)
  
  return(
    <div>
      <p>
        <strong>total of {total} exercises </strong>
        </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

export default Course