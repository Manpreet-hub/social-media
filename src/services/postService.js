import axios from "axios";

const getPostsService = () => axios.get("/api/posts");

const addPostService = (postData, authorization) =>
  axios.post("/api/posts", { postData }, { headers: { authorization } });

const editPostService = (postData, authorization) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization } }
  );

const removePostService = (postId, authorization) =>
  axios.delete(`/api/posts/${postId}`, { headers: { authorization } });

const likePostService = (postId, authorization) =>
  axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization } });

const dislikePostService = (postId, authorization) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization } }
  );

const addBookmarkService = (postId, authorization) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization } }
  );
const removeBookmarkServise = (postId, authorization) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization } }
  );
const getBookmarkService = (authorization) =>
  axios.get(`/api/users/bookmark`, { headers: { authorization } });

export {
  addPostService,
  editPostService,
  getPostsService,
  likePostService,
  removePostService,
  dislikePostService,
  addBookmarkService,
  removeBookmarkServise,
  getBookmarkService,
};
