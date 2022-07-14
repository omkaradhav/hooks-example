import React, { useState } from 'react'
import Header from './Component/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import './Style.css';



 const Contact = () => {
  const[on,setOn]=useState(false);


  const HandleClick=()=>{
      setOn(!on)
  }
  return (
    <>
     <Header/>
       
       <div className='Bulp text-center mt-5'>
      {
        on ? <img src='https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg' alt='ON'/> :
         <img src='https://www.collinsdictionary.com/images/full/lightbulb_111547856_1000.jpg' alt='off' />
      }
       </div>
      
      <div className='text-center'>
        <button onClick={HandleClick}>
           {
            on ? <>OFF</> :<>ON</>
           }
        </button>
      </div>
  </>
    
  )
}

export default Contact;