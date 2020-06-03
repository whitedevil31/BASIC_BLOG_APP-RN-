import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditScreen = ({ navigation, route }) => {
  const { id, title, content } = route.params;
 

  return (
    <BlogPostForm
      initialValue={{ title: title, content: content }}
      onSubmit={(title, content) => console.log(title, content)}
    />
  );
};

const styles = StyleSheet.create({});
export default EditScreen;
