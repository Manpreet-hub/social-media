import React from "react";
import { landingPageImg } from "../assets/images/";

export const AsideInfo = () => {
  return (
    <div className=" mr-10 my-4 border-l-2 px-20 ">
      <h2>Suggested for you</h2>
      <div className="flex mt-4 justify-between">
        <img
          src={landingPageImg}
          alt="User Profile"
          className="rounded-full w-12 h-12  cursor-pointer"
        />
        <h1 className="mt-4 mr-6">ManpreetS</h1>
        <button className="bg-blue-600 px-2 w-20 border-2 rounded-md font-bold text-sm">
          Follow
        </button>
      </div>
    </div>
  );
};
