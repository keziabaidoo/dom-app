import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link,Route}from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Portofolio from './Portofolio'


const App =() =>{
  return(
    <Router>
      <div className="App">
        <Link to ="/">Home</Link>
        <Link to ="/About">About</Link>
        <Link to ="/Contact">Contact</Link>
        <Link  to ="/Services">Services</Link>
        <Link to ="/Portofolio">Portofolio</Link>
      </div>

      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Services" component={Services}/>
      <Route exact path="/Portofolio" component={Portofolio}/>
    </Router>
  );
}
export default App;
