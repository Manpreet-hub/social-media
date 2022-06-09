import { Route, Routes } from "react-router-dom";
import { LandingPage, PageNotFound, Login, SignUp, Home } from "../pages/";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
