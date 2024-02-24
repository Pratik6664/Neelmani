import React from 'react'
import './Ecard.css'
const Ecard = ({img , heading , detail}) => {
  return (
    <>
     <div className='Ecard'>
      <img src={img} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  
    </>
  )
}

export default Ecard
