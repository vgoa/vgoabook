import React from 'react';
import './App.css';
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Nav from './components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Contacto">
            <Contacto/>
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
