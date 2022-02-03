import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>Title: {props.course.name}</h1>
    </div>
  )
};
 
const Content = (props) => {
  const [part1, part2, part3] = props.parts.parts;
  
  return (
    <>
      <Parts part={part1}/>
      <Parts part={part2}/>
      <Parts part={part3}/>
    </>
  )
};

const Total = (props) => {

  const [exercise1, exercise2, exercise3] = props.total.parts;

  return (
    <div>
      <p>Number of exercises {exercise1.exercises + exercise2.exercises + exercise3.exercises}</p>
    </div>
  )
};

const Parts = (props) => {
  return (
    <div>
        <p>Parts: {props.part.name} No. of Exercises: {props.part.exercises}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
}

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total total={course}/>      
    </div>
  )
}

export default App