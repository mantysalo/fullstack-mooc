import React from 'react'
import {StatisticEntry} from './StatisticEntry'

export const Statistics = ({ feedbacks }) => {

  const totalFeedbacks = Object.values(feedbacks).reduce((a, b) => a + b, 0)

  if (totalFeedbacks){
  return (
    <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
        <StatisticEntry text="Good" value= {feedbacks.good}/>
        <StatisticEntry text="Neutral" value= {feedbacks.neutral}/>
        <StatisticEntry text="Bad" value= {feedbacks.bad}/>
        <StatisticEntry text="All" value= {totalFeedbacks}/>
        <StatisticEntry text="Average score" value= {(feedbacks.good - feedbacks.bad)/totalFeedbacks}/>
        <StatisticEntry text="Percentage of positive feedback" value= {feedbacks.good/totalFeedbacks*100 + '%'}/>
        </tbody>
        </table>
      </div>
  )
  }
  else return (
    <div>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </div>
  )
}
