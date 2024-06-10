import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { login } from '../../store/session';
import * as sessionActions from '../../store/session';

import './LoginForm.css';

function LoginFormModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=> {
    let validation = {};
    if(credential.length < 4) validation.credential = "Must be longer than 4 characters";
    if(password.length < 6) validation.password = "Must be longer than 6 characters";
    setErrors(validation);
    const isValid = Object.keys(validation).length === 0;
    setIsFormValid(isValid);
  }, [credential, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (isFormValid) {
      return dispatch(sessionActions.login({ credential, password }))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
  };

  const handleDemoUser = async () => {
    const demoCredential = {
      credential: 'user1@user.io',
      password: 'password3'
    };

    try {
      await dispatch(login(demoCredential));
      closeModal();
    } catch (error) {
      console.error("Failed to log in as demo user", error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Log In</h1>
      <form className='login-form-container' onSubmit={handleSubmit}>
        <div className='input-fields'>
          <label className='credential-container'>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          {hasSubmitted && errors.credential && (
            <p>{errors.credential}</p>
          )}
          <label className='password-container'>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {hasSubmitted && errors.password && (
            <p>{errors.password}</p>
          )}
        </div>
        <button
          className='login-button'
          type="submit"
          disabled={!isFormValid}
        >
          Log In
        </button>
      </form>
      <button className='demo-user' onClick={handleDemoUser}>Log In as Demo User</button>
    </div>
  );
}

export default LoginFormModal;

