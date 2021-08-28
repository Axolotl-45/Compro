import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Imports for paths for components */

/* Stylesheet imports */

const App = props => {
  return (
    <div className="router">
      <main>
        {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
        <Switch>
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
        </Switch>
      </main>
    </div>
  );
};

export default App;
