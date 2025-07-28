import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
    setMessage('Please enter both username and password');
    return;
  }
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
       setMessage('Login successful');
        history.push('/dashboard');
      } else {
      setMessage(data.message || 'Login failed');
      }
    } catch (err) {
     setMessage('An error occurred during login');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4" style={{ minWidth: 350 }}>
        <h2 className="mb-4 text-center">LogIn</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id='username'
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
           
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id='password'
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
           
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" id='login'>LogIn</button>
        </form>
        {message && <div className="alert alert-info mt-3 text-center" id='alertMassage'>{message}</div>}
      </div>
    </div>
  );
};

export default Login;