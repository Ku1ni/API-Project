import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { login } from '../../store/session';

import './LoginForm.css';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();


  useEffect(()=> {
    let validation = {}
    if(credential.length < 4) validation.credential = "Must be long than 4 characters"
    if(password.length < 6) validation.password = " Must be longer than 4 characters"
    setErrors(validation)
  }, [credential, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true)

    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const handleDemoUser = async () => {
    const demoCredential = {
      credential: 'user1@user.io',
      password: 'password3'
    };

    try {
      await dispatch(login(demoCredential));
      closeModal()

    } catch (error) {
      console.error("Failed to log in as demo user", error);
    }
  };


  return (
    <div className='login-container'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        disabled={Object.values(errors).length !== 0}
        type="submit"
        >
          Log In
        </button>
      </form>
      <button className='demo-user'onClick={handleDemoUser}>Log In as Demo User</button>
    </div>
  );
}

export default LoginFormModal;
