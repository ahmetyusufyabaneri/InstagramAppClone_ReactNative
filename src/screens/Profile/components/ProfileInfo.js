import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient colors={["#DE0046", "#F7A34B"]} style={styles.cover}>
        <Image
          source={require("./../../../../assets/profile.png")}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statLabel}>Follower</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  cover: {
    width: 85,
    height: 85,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 99,
  },
  stats: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
  },
});

export default ProfileInfo;
