import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    let validation = {}
    if(username.length < 4) validation.username = "Must be long than 4 characters"
    if(password.length < 6) validation.password = " Must be longer than 4 characters"
    setErrors(validation)
    const isValid = Object.keys(validation).length === 0;
    setIsFormValid(isValid);
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    if(isFormValid){
      if (password === confirmPassword) {
        setErrors({});
        return dispatch(
          sessionActions.signup({
            email,
            username,
            firstName,
            lastName,
            password
          })
        )
          .then(closeModal)
          .catch(async (res) => {
            const data = await res.json();
            if (data?.errors) {
              setErrors(data.errors);
            }
          });
      }
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>
      <form className='signup-form-container' onSubmit={handleSubmit}>
        <label className='signup-email-container'>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label className='signup-username-container'>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.username && <p>{errors.username}</p>}
        <label className='signup-fname-container'>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label className='signup-lname-container'>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label className='signup-password-container'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.password && <p>{errors.password}</p>}
        <label className='signup-cpassword-container'>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <div className='button-container'>
        <button
          className='signup-button'
          type="submit"
          disabled={!isFormValid}>Sign Up
          </button>
          </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
