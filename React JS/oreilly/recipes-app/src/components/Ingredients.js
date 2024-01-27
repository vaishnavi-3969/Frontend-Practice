import React from 'react'

export default function Ingredients({amount, measurement, name}) {
  return (
    <li>
        {amount} {measurement} {name}
    </li>
  )
}
