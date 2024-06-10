import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { currentSpot } from '../../store/spots/spots';

import * as sessionActions from '../../store/session';
// import OpenModalButton from '../OpenModalButton/OpenModelButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import './ProfileButton.css';
import OpenModalMenuItem from './OpenModalMenuItem';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const spots = Object.values(useSelector(state => state.spots));

  useEffect(() => {
    if (user) {
      dispatch(currentSpot());
    }
  }, [dispatch, user]);




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
    navigate('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <NavLink to="spots/new">
        <button className="create-spot-btn">Create a Spot</button>
        </NavLink>
      <button className='menu-button' onClick={toggleMenu}>
        <CgProfile className="profile-button" size={30}/>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <ul className='user-profile-button'>
          <li>Hello, {user.firstName}</li>
          <li>{user.email}</li>
          <li>
          {spots.length > 0 ? (
                <NavLink to="/manage">Manage Spots</NavLink>
              ) : (
                <NavLink className='user-modal-create-spot'to="spots/new">Create a New Spot</NavLink>
              )}
            </li>
          <li>

            <button className='logout-button' onClick={logout}>Log Out</button>

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
