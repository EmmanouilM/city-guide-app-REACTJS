import React from 'react'
import './PlaceItem.css'

const PlaceItem = ({place}) => {
  return (
    <div>{place.name}</div>
  )
}

export default PlaceItem