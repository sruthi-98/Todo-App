import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './App.css';
import ProtetctedRoute from './ProtetctedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/tasks">
            <ProtetctedRoute component={TaskList} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
