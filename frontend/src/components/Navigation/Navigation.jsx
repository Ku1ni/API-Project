import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModelButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const sessionLinks = sessionUser ? (
    <li className="button-container">
      <ProfileButton user={sessionUser} />
    </li>
  ) : (
    <ul className='credential-container'>
      <li>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
      </li>
      <li>
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    </ul>
  );

  return (
    <ul className='home-container' style={{ listStyle: "none" }}>
      <li >
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
