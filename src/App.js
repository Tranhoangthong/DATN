import React from 'react';
import Header from './compoments/Header'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './compoments/pages/home';

function App() {
  return (
    <>
      <Router>
        <Header />   
        <Switch>
          <Route path='/' exact component={Home} />
         
        </Switch>
      </Router>
        
    </>
  );
}

export default App;
