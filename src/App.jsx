import React from 'react';
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Products from "./components/Products";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>    
      <About/>
      <Contact/>  
      
    </>
  );
}

export default App
