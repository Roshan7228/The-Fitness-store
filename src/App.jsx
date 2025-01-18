import React, { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {

  return (
    <>
      
      <Navbar />

      
      <MainRoutes  />

      <Footer />
    </>
  );
}

export default App;
