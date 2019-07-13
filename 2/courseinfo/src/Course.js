import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => {
  
  return (
    courses.map(course => {
      const totalExercises = course.parts.reduce((a, b) => a + b['exercises'], 0)
      return (
        <div key={course.name}>
          <Header title={course.name} />
          <Content parts={course.parts} />
          <Total total={totalExercises} />
        </div>
      )
    }
    )
  )
}

export default Course
