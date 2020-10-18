import React from 'react'

import lidingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
  return (
    <div className="loading">
      <h4>room data loading... </h4>
      <img src={lidingGif} alt="..." />
    </div>
  )
}
