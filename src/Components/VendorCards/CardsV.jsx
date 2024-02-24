import React from 'react' 
import './CardsV.css'
const CardsV = ({img , heading }) => {
  return (
    <div className='cardv'>
      <img className='cardv-img' src={img} alt="" /> 
      <span>{heading}</span>
    </div>
  )
}

export default CardsV
