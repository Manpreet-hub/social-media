import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/";
import { useState } from "react";
import { Header } from "../../components";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  let from = location.state?.from?.pathname || "/home";
  const singUpHandler = async (e) => {
    const { firstName, lastName, email, username, password } = userData;
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      username !== "" &&
      password !== ""
    ) {
      const response = await dispatch(signUpUser(userData));
      if (response?.payload.encodedToken) {
        navigate(from, { replace: true });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="txt-header-color txt-center">SIGN UP</h2>
          <form>
            <label className="label">First Name</label>
            <input
              required
              className="user-input"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={changeHandler}
            />
            <label className="label">Last Name</label>
            <input
              required
              className="user-input"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={changeHandler}
            />
            <label className="label">Email address</label>
            <input
              required
              className="user-input"
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={changeHandler}
            />
            <label className="label">Username</label>
            <input
              required
              className="user-input"
              type="text"
              name="password"
              placeholder="Enter username"
              onChange={changeHandler}
            />
            <label className="label">Password</label>
            <input
              required
              className="user-input"
              type="password"
              name="username"
              placeholder="Enter Password"
              onChange={changeHandler}
            />

            <button
              className="btn-default  btn-primary login-signup-btn"
              type="submit"
              onClick={singUpHandler}
            >
              Create new account
            </button>
            <div className="create">
              <Link className="link" to="/login">
                Already have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
