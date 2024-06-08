import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import * as sessionActions from '../../store/session';
// import OpenModalButton from '../OpenModalButton/OpenModelButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import './ProfileButton.css';
import OpenModalMenuItem from './OpenModalMenuItem';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };



  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
        if (!ulRef.current.contains(e.target)) {
            setShowMenu(false);
          }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <NavLink to="spots/new">
        <button className="create-spot-btn">Create a Spot</button>
        </NavLink>
      <button className='menu-button' onClick={toggleMenu}>
        <CgProfile className="profile-button" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <ul className='user-profile-button'>
          <li>Hello, {user.firstName}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
              <NavLink to="/manage">Manage Spots</NavLink>
            </li>
          <li>
            <NavLink to='/'>
            <button className='logout-button' onClick={logout}>Log Out</button>
            </NavLink>
          </li>
        </ul>
      ) : (
        <>
          <OpenModalMenuItem
            itemText="Log In"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
          />
          <OpenModalMenuItem
            itemText="Sign Up"
            onItemClick={closeMenu}
            modalComponent={<SignupFormModal />}
          />
        </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
