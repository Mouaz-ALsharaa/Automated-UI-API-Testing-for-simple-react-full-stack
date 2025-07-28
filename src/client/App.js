import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

// دالة ProtectedRoute
const ProtectedRoute = ({ component: Component, username, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      username ? (
        <Component {...props} username={username} onLogout={() => {
          props.history.push('/');
        }} />
      ) : (
        props.history.push('/')
      )
    }
  />
);

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  handleLogout = (history) => {
    this.setState({ username: null });
    history.push('/login');
  };

  render() {
    const { username } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            username={username}
          />
          <Route
            path="/"
            render={({ history }) => (
              <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="card shadow p-4 text-center" style={{ minWidth: 350 }}>
                  <h3 className="mb-4">Welcome to the demo application</h3>
                  <div className="mb-3">
                    <button className="btn btn-primary w-100" id='login' onClick={() => history.push('/login')}>LogIn</button>
                  </div>
                 
                </div>
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}