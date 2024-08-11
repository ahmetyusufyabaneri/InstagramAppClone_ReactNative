import {View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "../../components/Post";
import posts from "../../data/posts";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        {posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
