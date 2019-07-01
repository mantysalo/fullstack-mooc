import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Statistics} from './Statistics'
import {Button} from './Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)}>Good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      </div>
      <Statistics feedbacks={feedbacks}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
