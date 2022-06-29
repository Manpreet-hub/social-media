import ImageIcon from "@mui/icons-material/Image";
import { DisplayPost } from "./DisplayPost";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getPosts, addPost } from "../features/";

export const AddPost = () => {
  const { posts, postStatus } = useSelector((state) => state.posts);
  const { authToken, authUser } = useSelector((state) => state.auth);
  const [mediaData, setMediaData] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const uploadFile = useRef();
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch]);

  const addPostData = () => {
    dispatch(addPost({ postData: { content, mediaData }, authToken }));
    setContent("");
  };
  return (
    <div className="flex flex-col items-center gap-6 sticky w-full top-14 px-12 py-2 shadow-xl mx-auto">
      <div className="w-full flex flex-col gap-2 shadow-md rounded-md p-2 my-2">
        <img
          src={authUser.avatar}
          alt="user image"
          className="rounded-full w-16 h-16 cursor-pointer p-1 "
        />
        <textarea
          className="w-full h-28 p-2 rounded-lg "
          name="newPost"
          placeholder="What's happening?"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center  ml-14">
          <div>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => setMediaData(e.target.value[0])}
              ref={uploadFile}
            />
            <ImageIcon
              className="cursor-pointer"
              onClick={() => uploadFile.current.click()}
            />
          </div>
          <button
            className="bg-blue-600 p-2 w-20 border-2 rounded-md font-bold text-sm "
            onClick={addPostData}
          >
            Post
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 sticky  w-full  ">
        {posts.map((curPost) => (
          <DisplayPost post={curPost} key={curPost._id} />
        ))}
      </div>
    </div>
  );
};
