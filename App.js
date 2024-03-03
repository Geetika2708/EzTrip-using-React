import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarlogo from './Navbar';
import NavbarMid from './Navbarmid';
import NavbarEnd from './NavbarEnd';
import MainContent from './Main';
import DateAndTime from './DateandTIme';
import Database from "./Database";
import DiscoverPage from "./DiscoverPage";
import AboutPage from "./AboutPage";
import ReviewPage from "./ReviewPage";
import ContactPage from "./ContactPage";
import Chatbot from "./Chatbot"; // Import your chatbot component

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className='top-navbar'>
          <div className='navlogo'><Navbarlogo/></div>
          <div className='navmid'><NavbarMid/></div>
          <div className='navend'><NavbarEnd/></div>
        </div>

        <div className='main'>
          <div className="main-heading"><h1>Where to?</h1></div>
          <div className='datetime'>
            <DateAndTime/>
          </div>
        </div>
        
        <div className='data'>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Database />
        </div>

        <div className="chatbot-container">
          {showChatbot && <Chatbot />}
          <button onClick={() => setShowChatbot(!showChatbot)}>Toggle Chatbot</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
