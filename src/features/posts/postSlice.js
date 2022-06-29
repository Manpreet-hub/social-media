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
  addCommentService,
  editCommentService,
  deleteCommentService,
  addUpvoteService,
  addDownvoteService,
} from "../../services/";
import axios from "axios";

const initialState = {
  posts: [],
  bookmarks: [],
  bookmarkStatus: "idle",
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

const likePost = createAsyncThunk(
  "/posts/likePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addBookmark = createAsyncThunk(
  "posts/addBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await addBookmarkService(postId, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const removeBookmark = createAsyncThunk(
  "posts/removeBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await removeBookmarkServise(postId, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getBookmarks = createAsyncThunk(
  "posts/getBookmarks",
  async (authToken) => {
    try {
      const { data } = await getBookmarkService(authToken);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const addComment = createAsyncThunk(
  "/posts/addComment",
  async ({ postId, commentData, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await addCommentService(postId, commentData, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const editComment = createAsyncThunk(
  "post/editComment",
  async (
    { postId, commentId, commentData, authToken },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await editCommentService(
        postId,
        commentId,
        commentData,
        authToken
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteComment = createAsyncThunk(
  "/posts/deleteComment",
  async ({ postId, commentId, authToken }, { rejectWithValue }) => {
    try {
      const { data } = await deleteCommentService(postId, commentId, authToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      state.status = "failed";
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
      state.poststatus = "success";
    });
    builder.addCase(editPost.rejected, (state, { error }) => {
      state.poststatus = "failed";
      state.error = error.message;
    });

    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.poststatus = "success";
    });
    builder.addCase(likePost.rejected, (state, { error }) => {
      state.poststatus = "failed";
      state.error = error.message;
    });
    builder.addCase(dislikePost.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.poststatus = "success";
    });
    builder.addCase(dislikePost.rejected, (state, { error }) => {
      state.poststatus = "failed";
      state.error = error.message;
    });
    builder.addCase(addBookmark.fulfilled, (state, { payload }) => {
      state.bookmarkStatus = "success";
      state.bookmarks = payload.bookmarks;
    });
    builder.addCase(addBookmark.rejected, (state, { error }) => {
      state.bookmarkStatus = "failed";
      state.error = error.message;
    });
    builder.addCase(removeBookmark.fulfilled, (state, { payload }) => {
      state.bookmarks = payload.bookmarks;
      state.poststatus = "success";
    });
    builder.addCase(removeBookmark.rejected, (state, { error }) => {
      state.bookmarkStatus = "failed";
      state.error = error.message;
    });
    builder.addCase(addComment.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
    });
    builder.addCase(addComment.rejected, (state, { error }) => {
      state.error = error.message;
    });
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
    });
    builder.addCase(deleteComment.rejected, (state, { error }) => {
      state.error = error.message;
    });
    builder.addCase(editComment.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
    });
    builder.addCase(editComment.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

export {
  getPosts,
  addPost,
  editPost,
  getBookmarks,
  removeBookmark,
  addBookmark,
  dislikePost,
  likePost,
  deletePost,
  addComment,
  editComment,
  deleteComment,
};

export const postReducer = postSlice.reducer;
