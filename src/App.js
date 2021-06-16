import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Intro from './components/pages/Intro'
import Cards from "./components/Cards";
import Footer from './components/Footer';
import Connect from './components/pages/Connect';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path= "/" exact component= {Home}/>
        <Route path= "/#intro" exact component= {Intro}/>
        <Route path= "/intro" exact component= {Intro}/>
        <Route path= "/#projects" exact component= {Cards}/>
        <Route path= "/#footer" component={Footer}/>
        <Route path= "/connect" component={Connect}/>
      </Switch>
    </Router>

   </>
  );
}

export default App;
