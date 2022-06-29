import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-4 font-bold shadow-lg text-2xl mb-8 sticky top-0 bg-gray-50 z-50">
      <h1 className="">Connect</h1>
      {authToken ? (
        <button
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
          }}
        >
          Logout
        </button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};
