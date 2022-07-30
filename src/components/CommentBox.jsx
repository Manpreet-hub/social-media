import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { deleteComment, editComment } from "../features/";

export const CommentBox = ({ postId, comment }) => {
  const { authUser, authToken } = useSelector((state) => state.auth);
  const [option, setOption] = useState(false);
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [editComentText, setEditCommentText] = useState(comment.text);
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col gap-2 p-2 items-start justify-start fap-2 w-full rounded-sm  shadow-lg ">
      <div className="flex">
        <img
          src={authUser.avatar}
          alt="user image"
          className="rounded-full w-10 h-10 cursor-pointer p-1 "
        />
        <h3 className="mr-2 pt-2 px-1">
          {authUser.firstName} {authUser.lastName}
        </h3>
      </div>
      {isCommentEdit && (
        <div className="flex flex-col shadow-xl  w-full">
          <textarea
            type="comment"
            placeholder="Enter your reply"
            name="comment"
            value={editComentText}
            onChange={(e) => setEditCommentText(e.target.value)}
            className="flex-start border-none outline-none bg-transparent w-full resize-none px-2 font-bold"
            required
          />
          <div className="p-2">
            <button
              className="px-1 w-20 border-2 rounded-md font-bold text-sm mr-2 "
              onClick={() => setIsCommentEdit(!isCommentEdit)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 px-1 w-20 border-2 rounded-md font-bold text-sm "
              onClick={() => {
                dispatch(
                  editComment({
                    postId,
                    commentId: comment._id,
                    commentData: { text: editComentText },
                    authToken,
                  })
                );
                setIsCommentEdit(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {!isCommentEdit && <p className="px-4 ml-6">{comment.text}</p>}

      <div className=" rounded-md absolute top-0 right-4 flex flex-col items-start p-2 justify-center">
        <MoreVertIcon
          className="cursor-pointer"
          onClick={() => setOption(!option)}
        />
        {option && (
          <div className="w-24 h-20  rounded-md absolute top-0 left-6 bg-white flex flex-col items-start p-2 justify-center">
            <span
              className="cursor-pointer hover:bg-gray-50 w-full border-r-2 text-sm"
              onClick={() => setIsCommentEdit(!isCommentEdit)}
            >
              <EditIcon className="font-light" />
              Edit
            </span>
            <span
              className="cursor-pointer hover:bg-gray-50 w-full border-r-2 text-sm"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  deleteComment({ postId, commentId: comment._id, authToken })
                );
                setIsCommentEdit(!isCommentEdit);
              }}
            >
              <DeleteIcon className="font-light" /> Delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
