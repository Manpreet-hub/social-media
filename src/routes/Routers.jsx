import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  PageNotFound,
  Login,
  SignUp,
  Home,
  Explore,
  Profile,
  Bookmark,
} from "../pages/";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </>
  );
};
