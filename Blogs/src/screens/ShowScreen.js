import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather, FontAwesome } from "react-native-vector-icons";
const ShowScreen = ({ route, navigation }) => {
  const { id, title, content } = route.params;

  const { state } = useContext(Context);

  const BlogPost = state.find((BlogPost) => BlogPost.id === { id });

  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 50,
        marginLeft: 30,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{content}</Text>
      <View
        style={{
          padding: 80,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 500,
          paddingRight: 200,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id, title, content })}
        >
          <FontAwesome name="pencil" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ShowScreen;
