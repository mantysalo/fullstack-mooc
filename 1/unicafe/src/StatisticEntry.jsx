import React from 'react'

export const StatisticEntry = ({ description, value }) => {
  return (
    <tr>
      <td>{description}</td>
      <td>{value}</td>
    </tr>
  )
}
