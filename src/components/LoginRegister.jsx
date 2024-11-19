import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form field changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (isLogin) {
      // Handle Login
      if (email === 'user@example.com' && password === 'password123') {
        setSuccessMessage('Login successful! Welcome back.');
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } else {
      // Handle Registration
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
      } else if (!email || !password || !confirmPassword) {
        setErrorMessage('All fields are required.');
      } else {
        setSuccessMessage('Registration successful! You can now login.');
        // You would typically save the user data to a database here
      }
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

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default LoginRegister;
