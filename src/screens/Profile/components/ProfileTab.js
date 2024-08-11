import {View, Text, StyleSheet} from "react-native";
import {Grid, Mentions} from "../../../Icons";
import React from "react";

const ProfileTab = () => {
  return (
    <View style={styles.tab}>
      <View style={styles.grid}>
        <Grid size={26} />
      </View>
      <View style={styles.mentions}>
        <Mentions size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    marginTop: 20,
  },
  grid: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  mentions: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default ProfileTab;
