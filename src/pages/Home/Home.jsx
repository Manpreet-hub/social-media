import { Header, Sidebar, AsideInfo, AddPost } from "../../components";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-end items-center gap-6 sticky  w-full top-14 px-2  py-2 ">
        <div className="md:flex">
          <Sidebar />
          <AddPost />
          <AsideInfo />
        </div>
      </div>
    </>
  );
};
