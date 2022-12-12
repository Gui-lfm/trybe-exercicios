import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import StricAcess from './StrictAccess';

class App extends Component {
  render() {
    const links = ['/', '/about', '/users', '/strict-acess'];
    return (
      <BrowserRouter>
        {links.map((link) => (
          <Link to={link}>teste</Link>
        ))}
        <Switch>
          <Route
            path="/users/:id"
            render={(props) => (
              <Users {...props} greetingsMessage="Good morning" />
            )}
          />
          <Route
            path="/strict-acess"
            render={(props) => (
              <StricAcess
                {...props}
                user={{ username: 'jonas', password: '1234' }}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;