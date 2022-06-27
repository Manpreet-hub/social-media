import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPostService,
  editPostService,
  getPostsService,
  likePostService,
  removePostService,
  dislikePostService,
  addBookmarkService,
  removeBookmarkServise,
  getBookmarkService,
} from "../../services/";

const initialState = {
  posts: [],
  bookmark: [],
  userPosts: [],
  error: "",
  postStatus: "idle",
};

const getPosts = createAsyncThunk("/posts/getPosts ", async () => {
  const { data } = await getPostsService();
  return data;
});

const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await addPostService(postData, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, authToken }) => {
    const data = editPostService(postData, authToken);
    try {
      const { data } = await editPostService(postData, authToken);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const deletePost = createAsyncThunk(
  "/posts/deletePost",
  async ({ postId, authToken }) => {
    try {
      const { data } = await removePostService(postId, authToken);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.postStatus = "success";
    });
    builder.addCase(getPosts.rejected, (state, { error }) => {
      state.postStatus = "failed";
      state.error = error.message;
    });
    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.postStatus = "success";
    });
    builder.addCase(addPost.rejected, (state, { error }) => {
      state.postStatus = "failed";
      state.error = error.message;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.postStatus = "success";
    });
    builder.addCase(deletePost.rejected, (state, { error }) => {
      state.postStatus = "failed";
      state.error = error.message;
    });
    builder.addCase(editPost.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.status = "success";
    });
    builder.addCase(editPost.rejected, (state, { error }) => {
      state.status = "failed";
      state.error = error.message;
    });
  },
});

export { getPosts, addPost, editPost, deletePost };

export const postReducer = postSlice.reducer;
