import ImageIcon from "@mui/icons-material/Image";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../features";
import { useState } from "react";

export const EditPost = ({ editModal, setEditModal, post }) => {
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [content, setContent] = useState(post.content);

  const editPostData = (e) => {
    e.preventDefault();
    dispatch(editPost({ postData: { ...post, content }, authToken }));
    setEditModal(!editModal);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0  z-30 flex justify-center items-center bg-opacity-60  bg-black">
      <form className="relative md:w-96 w-full bg-white/95 px-4 py-2 h-60 rounded-md  flex justify-start items-start flex-col gap-2 z-20">
        <textarea
          type="text"
          placeholder="What's on your mind?"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-none outline-none p-1 bg-transparent w-full resize-none px-6 font-bold"
          required
        />
        <div className="ml-auto flex items-center justify-center absolute md:bottom-0 -bottom-0 py-10 md:right-32 right-16  gap-4">
          <div>
            <input className="hidden" type="file" accept="image/*" />
            <ImageIcon className="cursor-pointer" />
          </div>
          <div>
            <button
              className="bg-blue-600 p-2 w-20 border-2 rounded-md font-bold text-sm items-center ml-2"
              onClick={editPostData}
            >
              Update
            </button>
            <button
              className="bg-blue-600 p-2 w-20 border-2 rounded-md font-bold text-sm items-center ml-2"
              onClick={() => setEditModal(!editModal)}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
