import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import CreateDataContext from "./CreateDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "edit_BlogPost":
      return state.map((BlogPost) => {
        BlogPost.id == action.apyload.id ? action.payload : BlogPost;
      });
    case "delete_BlogPost":
      return state.filter((BlogPost) => BlogPost.id != action.payload);
    case "add_BlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};
const AddBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_BlogPost",
      payload: { title, content },
    });
    if (callback) {
      callback();
    }
  };
};

const DeleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_BlogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogPost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = CreateDataContext(
  BlogReducer,
  {
    AddBlogPost,
    DeleteBlogPost,
    editBlogPost,
  },
  []
);
