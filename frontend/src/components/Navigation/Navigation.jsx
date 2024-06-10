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
      <ProfileButton className="profile-icon" user={sessionUser} />
    </li>
  ) : (
    <ul className="credential-container">
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
      <ul className="home-container" style={{ listStyle: "none" }}>
        <li className="home-button">
          <NavLink className="logo-banner" to="/">
            <img
              src="https://res.cloudinary.com/dvly0pgsm/image/upload/v1717965705/Shore_Thing_zpoczo.png"
              alt=""
            />
          </NavLink>
        </li>
        {isLoaded && sessionLinks}
      </ul>
    </div>
  );
}

export default Navigation;
