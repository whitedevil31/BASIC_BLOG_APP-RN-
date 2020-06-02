import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import Context from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditScreen = ({ navigation, route }) => {
  const { id, title, content } = route.params;
  const { editBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      initialvalue={(title, content)}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default EditScreen;
