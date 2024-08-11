import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {Heart, Logo, Messenger, Plus} from "../../../Icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />
      <View style={styles.actions}>
        <TouchableOpacity>
          <Plus size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Heart size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
          </View>
          <Messenger size={24} />
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
    paddingHorizontal: 12,
    paddingBottom: 5,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  dotContainer: {
    position: "relative",
    zIndex: 5,
  },
  dot: {
    position: "absolute",
    backgroundColor: "#FE3650",
    width: 8,
    height: 8,
    borderRadius: 999,
    right: 0,
    top: 0,
  },
});

export default Header;
