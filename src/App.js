import './App.css';
import Companies from './component/Companies/Companies';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import Residencies from './component/Residencies/Residencies';
import Value from './component/Value/Value';
import Start from './component/Start/Start';
import React, { useState } from 'react'
function App() {
  const [menu,setmenu]=useState(false);
  return (
    <div className="App">
    <div className='nav-hero'>
      <div className='blur'></div>
      <Navbar menu={menu} setmenu={setmenu}/>
      <Hero menu={menu} setmenu={setmenu}/>
    </div>
     <Companies/>
     <Residencies/>
     <Value/>
     <Contact/>
     <Start/>
     <Footer/>
    </div>
  );
}

export default App;
