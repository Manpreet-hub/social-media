import LogoutIcon from "@mui/icons-material/Logout";

export const Header = () => {
  return (
    <div className="flex justify-between p-4 font-bold shadow-lg text-2xl mb-8 sticky top-0 bg-gray-50 z-50">
      <h1 className="">Connect</h1>
      <button>
        <LogoutIcon />
      </button>
    </div>
  );
};
