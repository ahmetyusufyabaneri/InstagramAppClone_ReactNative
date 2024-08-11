import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {Bookmark, Comment, Dots, Heart, Share} from "../Icons";
import FitImage from "./FitImage";

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.profile}>
          <Image source={{uri: post.user.avatar}} style={styles.avatar} />
          <Text style={styles.username}>{post.user.name}</Text>
        </View>
        <Dots widthSize={14} heightSize={3} />
      </View>
      <FitImage src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Comment size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Share size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Bookmark size={24} />
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 12}}>
          <Text style={styles.likes}>{post.likes} likes</Text>
          <Text>{post.description}</Text>
        </View>
        <View style={styles.comments}>
          {post?.comments > 0 && (
            <TouchableOpacity>
              <Text>View all {post?.comments} comments</Text>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <View style={styles.postBottom}>
            <Image
              style={{width: 30, height: 30, borderRadius: 999}}
              source={require("../../assets/profile.png")}
            />
            <TextInput placeholder="Add comment..." />
          </View>
        </View>
        <View>
          <Text style={{color: "gray"}}>{post.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 8,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 999,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  likes: {
    fontWeight: "bold",
  },
  postBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },
  comments: {
    marginBottom: 10,
  },
});

export default Post;
