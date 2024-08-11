import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import ProfileBio from "./components/ProfileBio";
import ProfileStories from "./components/ProfileStories";
import posts from "../../data/posts";
import ProfileTab from "./components/ProfileTab";

const Profile = () => {
  const screenWidth = Dimensions.get("window").width;
  const columns = 3;
  const imageSize = (screenWidth - (columns + 1) * 2) / columns;

  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={{uri: item.image}}
        style={{
          width: imageSize,
          height: imageSize,
          marginLeft: 1,
          marginBottom: 1,
          marginRight: 1,
        }}
      />
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStories />
      <ProfileTab />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          numColumns={columns}
          data={posts}
          renderItem={renderProps}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default Profile;
