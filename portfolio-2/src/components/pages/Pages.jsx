import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Header } from '../common/Header';
import { Home } from '../home/Home';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Footer } from '../common/Footer'

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
        <Footer/>
    </Router>
    </>
  )
}

export default pages