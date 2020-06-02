import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "react-native-vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, DeleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(BlogPost) => BlogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Content", {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                })
              }
            >
              <View style={styles.container}>
                <Text style={styles.font}>{item.title}</Text>

                <TouchableOpacity onPress={() => DeleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRadius: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#CCC",
  },
  font: { fontSize: 20 },
  icon: { fontSize: 25 },
});
export default IndexScreen;
