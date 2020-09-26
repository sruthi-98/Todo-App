import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/tasks">
            <TaskList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
