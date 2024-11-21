import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !password) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const endpoint = isLogin ? 'api/login' : 'api/register';
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(isLogin ? 'Login successful!' : 'Registration successful!');
        if (!isLogin) {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
      } else {
        setErrorMessage(data.message || 'An error occurred.');
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMessage('Failed to connect to the server.');
    }
  };

  const deleteUser = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!email) {
      setErrorMessage('Please provide an email to delete the account.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Account deleted successfully.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsLogin(true);
      } else {
        setErrorMessage(data.message || 'Failed to delete account.');
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMessage('An error occurred while deleting the account.');
    }
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        )}
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>

      {!isLogin && email && (
        <button
          onClick={deleteUser}
          style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
        >
          Delete Account
        </button>
      )}

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default LoginRegister;
