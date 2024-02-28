import React from 'react'
import './businesscards.css'
const businesscards = ({Businessimg , Businessheading , l}) => {
  return (
  <>
  
  <div className='Bcard'>
      <img className='Bcard-img' src={Businessimg} alt="" />
      <span className='Businessheading-btn-title'>{Businessheading}</span>
    </div>
  </>
  )
}

export default businesscards
