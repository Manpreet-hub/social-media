import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/";
import { useState } from "react";
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
      <div className="w-full flex justify-center mt-20">
        <div className="shadow-2xl text-center w-4/12 px-8">
          <h2 className="my-4 text-center">LOGIN</h2>
          <form className="flex flex-col" onSubmit={loginHandler}>
            <label className="text-left ">Username</label>
            <input
              required
              className="w-full p-2 border-2 rounded mb-4 "
              type="text"
              name="username"
              value={userInfo.username}
              placeholder="ManpreetSingh"
              onChange={changeHandler}
            />

            <label className="text-left">Password</label>
            <input
              required
              className="w-full p-2 border-2 rounded mb-4 "
              type="password"
              name="password"
              value={userInfo.password}
              placeholder="Test@123456"
              onChange={changeHandler}
            />

            <button
              className="border-blue-600  border-2 rounded-md font-bold text-sm p-4 my-4"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-blue-600  border-2 rounded-md font-bold text-sm p-4 my-4"
              type="submit"
              onClick={loginAsGuest}
            >
              Login As Guest
            </button>

            <div className="my-4">
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
