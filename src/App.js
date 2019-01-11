import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Provider from './context';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="fade-in-bottom"
            >
              <Navbar />
            </CSSTransition>            
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />>
                <Route exact path="/lyrics/track/:id" component={Lyrics} />>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>      
    );
  }
}

export default App;
