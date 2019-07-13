import React from 'react'
import Part from './Part'

export default function Content({ parts }) {
  return (
    <div>
      {parts.map(item => (
        <Part name={item.name} count={item.exercises} />
      ))}
    </div>
  )
}
