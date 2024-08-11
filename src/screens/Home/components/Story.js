import {View, Text, Image} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Story = ({story}) => {
  return (
    <View key={story.id} style={styles.story}>
      <LinearGradient colors={["#DE0046", "#F7A34B"]} style={styles.cover}>
        <Image source={{uri: story.user.avatar}} style={styles.avatar} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};

const styles = {
  story: {
    width: 67,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 33.5,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  username: {
    fontSize: 12,
    fontWeight: "bold",
  },
};

export default Story;
