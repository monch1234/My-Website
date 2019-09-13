import React from 'react';
import './App.css';
import Header from './components/common/Navbar';
import About from './components/sections/About' 
// import Home from "../src/components/sections/Home"
// import About from "../src/components/sections/About"
// import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Router>
        <Route path = '/' component = {Home}  exact/>
        <Route path = '/Home' component = {Home} />
        <Route path = '/About' component = {About} />
        {/* <Route path = '/Skills' component = {Skills} /> */}
      {/* </Router> */} 
    </div>
  );
}

export default App;
