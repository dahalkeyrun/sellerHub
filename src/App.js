import React from 'react';
import Navbar from './commonComponents/navbar';
import Footer from './commonComponents/footer';
import './App.css';

function App() {
  return (
    <div className="App">
   <div>
    <Navbar />
    </div> 

    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
