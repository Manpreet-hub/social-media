import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/";
import { useState } from "react";

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
    <div className="w-full flex justify-center mt-20">
      <div className="shadow-2xl text-center w-4/12 px-8">
        <h2 className="my-4 text-center">SIGN UP</h2>
        <form className="flex flex-col">
          <label className="text-left">First Name</label>
          <input
            required
            className="w-full p-2 border-2 rounded mb-4"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={changeHandler}
          />
          <label className="text-left">Last Name</label>
          <input
            required
            className="w-full p-2 border-2 rounded mb-4"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={changeHandler}
          />
          <label className="text-left">Email address</label>
          <input
            required
            className="w-full p-2 border-2 rounded mb-4"
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={changeHandler}
          />
          <label className="text-left">Username</label>
          <input
            required
            className="w-full p-2 border-2 rounded mb-4"
            type="text"
            name="password"
            placeholder="Enter username"
            onChange={changeHandler}
          />
          <label className="text-left">Password</label>
          <input
            required
            className="w-full p-2 border-2 rounded mb-4"
            type="password"
            name="username"
            placeholder="Enter Password"
            onChange={changeHandler}
          />

          <button
            className="border-blue-600  border-2 rounded-md font-bold text-sm p-4 my-4"
            type="submit"
            onClick={singUpHandler}
          >
            Create new account
          </button>
          <div className="my-4">
            <Link className="link" to="/login">
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
