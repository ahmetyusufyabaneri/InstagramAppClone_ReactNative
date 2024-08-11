import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import {Dropdown, Menu, Plus} from "../../../Icons";

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.username}>username</Text>
        <Dropdown size={20} />
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity>
          <Plus size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProfileHeader;
