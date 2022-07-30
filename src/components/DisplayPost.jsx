import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { EditPost } from "./EditPost";
import {
  deletePost,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
} from "../features/";
import { useNavigate } from "react-router-dom";

export const DisplayPost = ({ post }) => {
  const {
    _id,
    avatar,
    firstName,
    comments,
    lastName,
    createdAt,
    content,
    username,
  } = post;
  const [optionDisplay, setOptionDisplay] = useState(false);
  const { authUser, authToken } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false);

  const likedByUser = () =>
    post.likes.likedBy.find((user) => (user._id === authUser._id).length !== 0);

  return (
    <div className="flex flex-col shadow-md gap-8 w-full pl-4">
      <div className=" relative flex ">
        <img
          src={avatar}
          alt="user image"
          className="rounded-full w-16 h-16 cursor-pointer p-1 "
        />

        <h3 className="mr-2">
          {firstName} {lastName}
        </h3>
        <p>
          {` ${new Date(createdAt)
            .toDateString()
            .split(" ")
            .slice(1, 4)
            .join(" ")}`}
        </p>
        {authUser.username === username ? (
          <div className=" rounded-md absolute top-0 right-4 flex flex-col items-start p-2 justify-center">
            <MoreVertIcon
              className="cursor-pointer"
              onClick={() => setOptionDisplay(!optionDisplay)}
            />
            {optionDisplay && (
              <div className="w-24 h-20  rounded-md absolute top-0 left-6 bg-white flex flex-col items-start p-2 justify-center">
                <span
                  className="cursor-pointer hover:bg-gray-50 w-full border-r-2 text-sm"
                  onClick={() => setEditModal(!editModal)}
                >
                  <EditIcon className="font-light" />
                  Edit
                </span>
                <span
                  className="cursor-pointer hover:bg-gray-50 w-full border-r-2 text-sm"
                  onClick={() =>
                    dispatch(deletePost({ postId: _id, authToken }))
                  }
                >
                  <DeleteIcon className="font-light" /> Delete
                </span>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <h2 className="text-left min-w-fit">{content}</h2>

      <div className="flex gap-8 m-4">
        <span>
          {post?.likes?.likedBy.find(
            (item) => item?.username === authUser?.username
          ) ? (
            <FavoriteIcon
              className=" cursor-pointer"
              style={{ color: "#E53E3E" }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(dislikePost({ postId: _id, authToken }));
              }}
            />
          ) : (
            <FavoriteBorderIcon
              className=" cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(likePost({ postId: _id, authToken }));
              }}
            />
          )}
          <span className="px-2 relative top-1 font-bold text-base">
            {post.likes.likeCount}
          </span>
        </span>

        <span>
          <ChatBubbleOutlineOutlinedIcon
            className=" cursor-pointer"
            onClick={() => navigate(`/post/${_id}`)}
          />
          <span className="px-2 relative top-1 font-bold text-base">
            {comments.length}
          </span>
        </span>

        <span>
          {bookmarks.find((curEle) => curEle._id === _id) ? (
            <BookmarkIcon
              className=" cursor-pointer"
              onClick={() =>
                dispatch(removeBookmark({ postId: _id, authToken }))
              }
            />
          ) : (
            <BookmarkBorderOutlinedIcon
              className=" cursor-pointer"
              onClick={() => dispatch(addBookmark({ postId: _id, authToken }))}
            />
          )}
        </span>
      </div>
      {editModal && (
        <EditPost
          editModal={editModal}
          setEditModal={setEditModal}
          post={post}
        />
      )}
    </div>
  );
};
