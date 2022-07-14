import React, { useRef, useState } from "react";


import './App.css';
import Header from "./Component/Header";


const About = () => {

  const luckyName=useRef(null);

  const[show,setShow]=useState(false)

  const submitForm=(e)=>{
    e.preventDefault();
    const name =luckyName.current.value;
   name === " "  ?alert('plz fill the data'):setShow(true);
  }
  return (
    <>
    <Header/>
     
<div className="refHooks">

      <form onSubmit={submitForm} >
        <h2>UseRef Hooks</h2>
        <div>
          <label htmlFor="luckyName">Enter Your Name</label><br/>
          <input type='text' id="luckyName" ref={luckyName}></input>
        </div>
        <br/>
        <button className="btn btn-warning">Submit</button>

        </form>
        <p>{show ? `your lucky name is ${luckyName.current.value}`:' '}</p>
</div>

       
       
    </>
  );
};

export default About;
