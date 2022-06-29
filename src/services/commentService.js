import axios from "axios";

export const addCommentService = (postId, commentData, authorization) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization } }
  );

export const editCommentService = (
  postId,
  commentId,
  commentData,
  authorization
) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization } }
  );

export const deleteCommentService = (postId, commentId, authorization) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: { authorization },
    }
  );
