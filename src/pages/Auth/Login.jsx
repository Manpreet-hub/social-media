import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/";
import { useState } from "react";
import { Header } from "../../components";
export const Login = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const changeHandler = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  let from = location.state?.from?.pathname || "/home";
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({ username: userInfo.username, password: userInfo.password })
    );
    navigate(from, { replace: true });
  };

  const loginAsGuest = (e) => {
    e.preventDefault();
    setUserInfo({ username: "ManpreetSingh", password: "Test@123456" });
  };

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="txt-header-color txt-center">LOGIN</h2>
          <form onSubmit={loginHandler}>
            <label className="label">Username</label>
            <input
              required
              className="user-input"
              type="text"
              name="username"
              value={userInfo.username}
              placeholder="ManpreetSingh"
              onChange={changeHandler}
            />

            <label className="label">Password</label>
            <input
              required
              className="user-input"
              type="password"
              name="password"
              value={userInfo.password}
              placeholder="Test@123456"
              onChange={changeHandler}
            />

            <button
              className="btn-default  btn-primary login-signup-btn"
              type="submit"
            >
              Login
            </button>
            <button
              className="btn-default  login-signup-btn"
              type="submit"
              onClick={loginAsGuest}
            >
              Login As Guest
            </button>

            <div className="create">
              <Link className="link" to="/signup">
                Create new account 👉
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
