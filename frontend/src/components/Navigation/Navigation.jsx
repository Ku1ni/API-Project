import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton/OpenModelButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import { FaUmbrellaBeach } from "react-icons/fa6";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const sessionLinks = sessionUser ? (
    <li className="button-container">
      <ProfileButton className='profile-icon' user={sessionUser} />
    </li>
  ) : (
    <ul className='credential-container'>
      <li className="login-container">
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
      </li>
      <li className="signup-container">
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    </ul>
  );

  return (
    <div>

    <ul className='home-container' style={{ listStyle: "none" }}>
      <li className="home-button">
        <NavLink to="/"><FaUmbrellaBeach size={50} /></NavLink>

      </li>

      {isLoaded && sessionLinks}
    </ul>


    </div>
  );
}

export default Navigation;
