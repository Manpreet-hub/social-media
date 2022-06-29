import { Sidebar, Header, DisplayPost, CommentBox } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addComment } from "../../features/";

export const SinglePost = () => {
  const { posts } = useSelector((state) => state.posts);
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [comment, setComment] = useState("");
  const currentPost = posts.filter((curPost) => curPost._id === postId);
  return (
    <>
      <Header />
      <div className="flex justify-around">
        <Sidebar />
        {currentPost.length !== 0 ? (
          <div className="flex flex-col justify-center items-center gap-6 sticky shadow-xl ">
            {currentPost.map((curPost) => (
              <DisplayPost post={curPost} key={curPost._id} />
            ))}
            <div className="flex shadow-xl  w-full">
              <textarea
                type="text"
                placeholder="Enter your reply"
                name="content"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-start border-none outline-none bg-transparent w-full resize-none px-2 font-bold"
                required
              />
              <button
                className="bg-blue-600 px-1 w-20 border-2 rounded-md font-bold text-sm "
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    addComment({
                      postId,
                      commentData: { text: comment },
                      authToken,
                    })
                  );
                  setComment("");
                }}
              >
                Reply
              </button>
            </div>
            {currentPost[0].comments.map((comment) => (
              <CommentBox key={comment._id} postId={postId} comment={comment} />
            ))}
          </div>
        ) : (
          <h2>No post found with id ${postId}</h2>
        )}
      </div>
    </>
  );
};
