import React from 'react'
import Part from './Part'

export default function Content({ parts }) {
  return (
    <div>
      {parts.map((item, index) => (
        <Part key={item.name + index + Math.random()} name={item.name} count={item.exercises} />
      ))}
    </div>
  )
}
