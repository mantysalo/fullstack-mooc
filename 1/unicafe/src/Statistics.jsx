import React from 'react'
import { StatisticEntry } from './StatisticEntry'

export const Statistics = ({ feedbacks }) => {
  const totalFeedbacks = Object.values(feedbacks).reduce((a, b) => a + b, 0)
  const averageFeedback = (feedbacks.good - feedbacks.bad) / totalFeedbacks
  const positivePercentage = (feedbacks.good / totalFeedbacks) * 100 + '%'
  if (totalFeedbacks) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticEntry description='Good' value={feedbacks.good} />
            <StatisticEntry description='Neutral' value={feedbacks.neutral} />
            <StatisticEntry description='Bad' value={feedbacks.bad} />
            <StatisticEntry description='All' value={totalFeedbacks} />
            <StatisticEntry description='Average score' value={averageFeedback} />
            <StatisticEntry description='Percentage of positive feedback' value={positivePercentage} />
          </tbody>
        </table>
      </div>
    )
  } else
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
}
