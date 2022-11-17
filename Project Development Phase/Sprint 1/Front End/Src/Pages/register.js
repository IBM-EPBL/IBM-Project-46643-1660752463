import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();

    const userDetails = {
      fullName: name, email, password,
    };

    if (userDetails && userDetails.fullName && userDetails.password && userDetails.email) {
      // console.log('Hi'); // eslint-disable-line no-console
      axios.post('http://127.0.0.1:8000/register', userDetails)
        .then(() => {
          // console.log(response.json); // eslint-disable-line no-console
          navigate('/login');
        })
        .catch((ex) => console.log(ex)); // eslint-disable-line no-console
    }
  }

  return (
    <div className="main-container">
      <form className="login-form" onSubmit={registerUser}>
        <div className="form-input">
          <p>Name</p>
          <input type="text" name="text" id="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-input">
          <p>e-mail</p>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Password</p>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Confirm Password</p>
          <input type="password" name="password" id="conf-password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;