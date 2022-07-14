
import './App.css';
import UseAPI from './UseAPI';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';

import About from './About';
import Contact  from './Contact';
import UseReducer from './UseReducer';



function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/About' element={<About/>}/> 
     <Route path='/UseAPI' element={<UseAPI/>}/> 
     <Route path='/Contact' element={<Contact/>}/> 
     <Route path='/UseReducer' element={<UseReducer/>}/>
     
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
