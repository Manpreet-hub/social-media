import "./landingPage.css";
import Button from "@mui/material/Button";
import { landingPageImg } from "../../assets/images/";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="text-container">
        <div className="text-wrapper">
          <h2>FOLLOW</h2>
          <h5 className="para-md para-text">PEOPLE AROUND THE GLOBE</h5>
        </div>
        <div className="text-wrapper">
          <h2>Connect</h2>
          <h5 className="para-md para-text">WITH YOUR FRIENDS</h5>
        </div>
        <div className="text-wrapper">
          <h2>SHARE </h2> <h5 className="para-md para-text">WHAT YOU THINK</h5>
        </div>
        <div className="join-now-btn">
          <Link className="link" to="/signup">
            <Button variant="contained">Join Now</Button>
          </Link>
        </div>

        <Link className="link" to="/login">
          <h2>Already have an account ?</h2>
        </Link>
      </div>
      <div className="image-container">
        <img src={landingPageImg} alt="landing-page" />
      </div>
    </div>
  );
};
