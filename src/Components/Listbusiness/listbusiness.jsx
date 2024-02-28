import React from 'react'
import Navbar from '../Navbar/Navbar'
import Businesscards from '../Businesscards/businesscards'
import Photographer from "../Home/Photographer.jpg";
import decorationv from "../Home/decorationv.jpg";
import eventplan from "../Home/eventplan.jpg";
import caters from "../Home/caters.jpg";
import makeup from "../Home/makeup.jpg";
import mehandi from "../Home/mehandi.jpg";
import cakev from "../Home/cakev.jpg";
import dj from "../Home/dj.jpg";

import './listbusiness.css'
const business = () => {
  const redirectToGoogleForm = () => {
    window.location.href = 'https://forms.gle/gAuKqu1NeH7hSMkf7';
   
  };
  return (
    <>
   <Navbar/>
<div className='listbusiness-container'>
<div className='listbusiness-container-1st-row'>
      <button onClick={redirectToGoogleForm} className='Businesscard-btn'> <Businesscards  Businessimg={Photographer} Businessheading={"Photographer"}></Businesscards></button> 
      <button className='Businesscard-btn'> <Businesscards Businessimg={decorationv} Businessheading={"Decorators"}></Businesscards></button>
      <button className='Businesscard-btn'> <Businesscards Businessimg={caters} Businessheading={"Caters"}></Businesscards></button>
        </div>
     <div className='listbusiness-container-2nd-row'>
     <button className='Businesscard-btn'><Businesscards Businessimg={mehandi} Businessheading={"Mehandi Ceromany"}></Businesscards></button>
     <button className='Businesscard-btn'><Businesscards Businessimg={makeup} Businessheading={"Makeup Artist"}></Businesscards></button>
     <button className='Businesscard-btn'><Businesscards Businessimg={cakev} Businessheading={"Cake-Bakers"}></Businesscards></button>
        </div>
        <div className='listbusiness-container-3rd-row'>   
        <button className='Businesscard-btn'><Businesscards Businessimg={dj} Businessheading={"DJ"}></Businesscards></button>
        <button className='Businesscard-btn'><Businesscards Businessimg={eventplan} Businessheading={"Event Planers"}></Businesscards></button>
        <button className='Businesscard-btn'><Businesscards Businessimg={eventplan} Businessheading={"Event Planers"}></Businesscards></button>
        </div>
</div>
    </>
  )
}

export default business
