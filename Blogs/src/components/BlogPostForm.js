import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import EditScreen from "../screens/EditScreen";
const BlogPostForm = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);
  return (
    <View>
      <Text style={styles.text}>Enter title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <View style={{ padding: 20, alignItems: "center" }}>
        <Button
          title="Save blog post"
          onPress={() => {
            onSubmit(title, content);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#CCC",
    borderWidth: 4,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingLeft: 10,
  },
  text: { marginLeft: 10, paddingBottom: 10 },
});
export default BlogPostForm;
