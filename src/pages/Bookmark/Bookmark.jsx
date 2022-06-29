import { Sidebar, Header, DisplayPost } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookmarks } from "../../features/";

export const Bookmark = () => {
  const { bookmarks, posts } = useSelector((state) => state.posts);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks({ authToken }));
  }, []);
  const bookmarPost = posts.filter((post) =>
    bookmarks.find((item) => item._id === post._id)
  );

  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Sidebar />
        <div className="flex flex-col justify-center items-center gap-6 sticky ">
          {bookmarks.length > 0 ? (
            bookmarPost.map((post) => (
              <DisplayPost key={post._id} post={post} />
            ))
          ) : (
            <h1>No Bookmarks Yet</h1>
          )}
        </div>
      </div>
    </>
  );
};
