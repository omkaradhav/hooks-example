import React, { useState } from "react";
import Header from "./Component/Header";
import "./Home.css";

function Home() {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const [allEntry,setallEntry]=useState([])

  const submitForm= (e)=>{
    e.preventDefault();

    if(email&&password){

      const newEntry ={ id:new Date().getTime().toString(),  email,password};
      setallEntry([...allEntry,newEntry]);
      setEmail('');
      setPassword('');
    }else{
      alert('fill the data')
    }
  }
  return (
    <>
      <Header />

      <form className="main" onSubmit={submitForm}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" id="email" autoComplete="off" value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" autoComplete="off" value={password}
           onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        {
          allEntry.map((curr)=>{
               return(
                <div className="data" key={curr.id}>
                   <p>Email: {curr.email}</p>
                   <p>Pass: {curr.password}</p>
                </div>
               )
          })
        }
      </div>
    </>
  );
}

export default Home;
