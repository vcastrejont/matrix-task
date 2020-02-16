import React from 'react'
import Car from './Car'

const Listing = () => {
  return (
    <div className="list container">
      <h2>POPULAR NEW CARS</h2>
      <div className="row">
        <Car />
        <Car />
        <Car />
        <Car />
      </div>
    </div>
  )
}

export default Listing
