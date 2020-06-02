import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { NavigationContainer } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { AddBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        AddBlogPost(title, content, () => navigation.navigate("Blog"));
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
