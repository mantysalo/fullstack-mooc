import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

function App() {
  const courses =[
    {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundmentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
      { name: 'Test course', exercises: 1337}
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
