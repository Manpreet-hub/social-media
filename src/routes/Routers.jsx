import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import {
  LandingPage,
  PageNotFound,
  Login,
  SignUp,
  Home,
  Explore,
  Profile,
  Bookmark,
  SinglePost,
} from "../pages/";
import { useSelector, useDispatch } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { authToken } = useSelector((state) => state.auth);
  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <ProtectedRoute>
              <Bookmark />
            </ProtectedRoute>
          }
        />
        <Route
          path="post/:postId"
          element={
            <ProtectedRoute>
              <SinglePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
