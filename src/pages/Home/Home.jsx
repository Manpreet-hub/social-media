import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components";

export const Home = () => {
  const authToken = useSelector((state) => state.auth);

  return (
    <div>
      <Header />
      Home
    </div>
  );
};
