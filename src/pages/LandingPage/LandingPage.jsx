import Button from "@mui/material/Button";
import { landingPageImg } from "../../assets/images/";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="flex items-center justify-around flex-wrap h-screen">
      <div>
        <div className="flex text-lg pb-9">
          <h1 className="font-bold">FOLLOW</h1>
          <h5 className="para-md para-text mt-1 pl-2">
            PEOPLE AROUND THE GLOBE
          </h5>
        </div>
        <div className="flex text-lg pb-9">
          <h1 className="font-bold">Connect</h1>
          <h5 className="para-md para-text mt-1 pl-2">WITH YOUR FRIENDS</h5>
        </div>
        <div className="flex text-lg pb-9">
          <h1 className="font-bold">SHARE </h1>
          <h5 className="para-md para-text mt-1 pl-2">WHAT YOU THINK</h5>
        </div>
        <div className="py-8">
          <Link className="link" to="/signup">
            <Button className="w-full " variant="contained">
              Join Now
            </Button>
          </Link>
        </div>

        <Link className="link" to="/login">
          <h2>Already have an account ?</h2>
        </Link>
      </div>
      <div className="">
        <img className="h-5/6 w-full" src={landingPageImg} alt="landing-page" />
      </div>
    </div>
  );
};
