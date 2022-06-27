import { Sidebar, Header, DisplayPost } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/";
import { useEffect } from "react";

export const Explore = () => {
  const { posts, postStatus } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Sidebar />
        <div className="flex flex-col justify-center items-center gap-6 sticky  ">
          {posts.map((curPost) => (
            <DisplayPost post={curPost} key={curPost._id} />
          ))}
        </div>
      </div>
    </>
  );
};
