import React from 'react'
import { Header } from '../common/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Home } from '../home/Home';
import { About } from './About';
import { Skills } from '../home/Skills';
import { Contact } from '../home/Contact';

const pages = () => {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Skills' component={Skills}/>
          <Route exact path='/Contact' component={Contact}/>
          
        </Switch>
    </Router>
    </>
  )
}

export default pages