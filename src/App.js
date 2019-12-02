import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Logo from './img/logo.png';
import AddNewsConst from './components/addNews'
import Velkommen from './components/velkommen'
import Navbar from './components/navbar';


function App() {
return (
   <BrowserRouter>
  <div className="App">
    <div className="header">
    <Link to="/">
    <img className="logo" src={Logo} alt="logo" /> </Link>
 
      <Navbar/>
      <Route path="/Velkommen" component={Velkommen} />
      <Route path="/AddNewsConst" component={AddNewsConst} />
  
     
    </div>
 
  </div>
  </BrowserRouter>

);
}

export default App;