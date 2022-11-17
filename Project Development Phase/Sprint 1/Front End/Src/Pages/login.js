import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function loginUser(event) {
    event.preventDefault();
    const userDetails = {
      email, password,
    };
    console.log(userDetails); // eslint-disable-line no-console
    if (userDetails && userDetails.email && userDetails.password) {
      axios.post('http://127.0.0.1:8000/login', userDetails)
        .then((response) => {
          console.log(response.json); // eslint-disable-line no-console
          navigate('/');
        })
        .catch((ex) => {
          // console.log(ex); // eslint-disable-line no-console
          // const error = JSON.parse(ex);
          if (ex.response && ex.response.status && ex.response.status === 404) {
            alert('User not found'); // eslint-disable-line no-alert
          } else {
            console.log(ex); // eslint-disable-line no-console
          }
        });
    } else {
      alert('Please enter valid credentials'); // eslint-disable-line no-alert
    }
  }
  return (
    <div className="main-container">
      <form className="login-form" onSubmit={loginUser}>
        <div className="form-input">
          <p>e-mail</p>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Password</p>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;