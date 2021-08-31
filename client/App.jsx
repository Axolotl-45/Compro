import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Imports for paths for components */
import Container from './components/Container.jsx';

/* Stylesheet imports */
import './stylesheets/styles.css';

const App = props => {
  return (
    <div className="router">
      <main>
      <div className="title">
        <h1>Compro</h1>
      </div>
        < Container />
        
        {/* <Switch>
          <Route
            exact
            path="/login"
            // component={} --> login import
          />
          <Route
            exact
            path="/signup"
            // component={} --> signup import
          />
          <Route
            exact
            path="/home"
            // component={} --> home import
          />
        </Switch> */}
      </main>
    </div>
  );
};

export default App;
