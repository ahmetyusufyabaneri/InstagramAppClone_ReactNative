import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import React from "react";

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.username}>Username</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        excepturi eligendi ad eum illum.{" "}
        <Text style={{color: "#004C8B"}}>#hashtag</Text>
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bio: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    gap: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  link: {
    color: "#004C8B",
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CBCBCB",
    marginTop: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ProfileBio;
