import {View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import stories from "../../../data/stories";
import Story from "./Story";

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories?.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
});

export default Stories;
