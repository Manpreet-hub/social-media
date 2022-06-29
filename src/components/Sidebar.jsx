import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "	#000080" : "",
  });
  return (
    <div className="fixed bottom-0 left-0 z-[1] md:h-[90vh] bg-white px-8  md:pt-1 font-medium shadow-sm w-80vw">
      <ul className="flex justify-between items-center md:justify-start md:items-start md:flex-col md:gap-4 p-8 ">
        <li className="text-xl pb-4">
          <NavLink to="/home" style={activeStyle}>
            <span>
              <HomeOutlinedIcon className="pb-1" />
            </span>

            <span className="px-2">Home</span>
          </NavLink>
        </li>

        <li className="text-xl pb-4">
          <NavLink to="/explore" style={activeStyle}>
            <span>
              <ExploreOutlinedIcon />
            </span>

            <span className="px-2 ">Explore</span>
          </NavLink>
        </li>
        <li className="text-xl pb-4">
          <NavLink to="/bookmark" style={activeStyle}>
            <span>
              <BookmarkBorderOutlinedIcon />
            </span>

            <span className="px-2 ">Bookmark</span>
          </NavLink>
        </li>
        <li className="text-xl pb-4">
          <NavLink to="/profile" style={activeStyle}>
            <span>
              <AccountCircleOutlinedIcon />
            </span>

            <span className="px-2 ">Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
