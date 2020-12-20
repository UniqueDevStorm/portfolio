import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/bot' component={() => window.location.replace('https://discord.com/oauth2/authorize?client_id=695899835953578025&permissions=2084433143&scope=bot')} />
        </Switch>
      </Router>
    )
  }
}