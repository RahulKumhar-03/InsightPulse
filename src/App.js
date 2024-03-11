import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
       <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={6} country="in" category="general"/>}/>
            <Route path="/Business" element={<News key="business" apiKey={apiKey} pageSize={6} country="in" category="business"/>}/>
            <Route path="/Entertainment" element={<News key="entertainmen" apiKey={apiKey} pageSize={6} country="in" category="entertainment"/>}/>
            <Route path="/Health" element={<News key="health" apiKey={apiKey} pageSize={6} country="in" category="health"/>}/>
            <Route path="/Science" element={<News key="science" apiKey={apiKey} pageSize={6} country="in" category="science"/>}/>
            <Route path="/Sports" element={<News key="sports" apiKey={apiKey} pageSize={6} country="in" category="sports"/>}/>
            <Route path="/Technology" element={<News key="technology" apiKey={apiKey} pageSize={6} country="in" category="technology"/>}/>
          </Routes>
       </Router>
      </div>
    )
  }
export default App

