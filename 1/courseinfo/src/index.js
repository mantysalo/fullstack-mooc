import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundmentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ],
  }
  const totalExercises = course.parts.reduce((a, b) => a + b['exercises'], 0)
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
