import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ProfileStories = () => {
  return (
    <ScrollView horizontal style={styles.stories}>
      <View style={styles.story}>
        <View style={styles.storyImageWrapper}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QP5lB40XA68u2U3DSWpRdNAO-taBG7SegC1A7qXUZ55Qufsm10gtUQKbUcqs2egi5dWT9eHCFTphGYF20o-SKqHjUu46pPv0j3YL8GugwKICaqhgUB0f1ddg5664LNehsStdEOHrSvHUWT3y5i6XGelPxvoXxAzq7uYoDW4noYb6XfYOTCqMpm1zqQqiop4RSHTPcdvjp2hQSm4WTXQQVa9K5EMMq2ZhYmVDd9Fv99SnhZqB5NTgJ26GP-W847K3BZdtERRiLxEmrUckckuXduKDudxn9MObSmUzhxlIK~9CbinVDNvInBBUOmIcCMDCLlIgPji2MlvmiJnekk7wGg__",
            }}
            style={styles.storyImage}
          />
        </View>
        <Text>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyImageWrapper}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/7768/f396/28e8130d48cd115b029fa0cb022605b3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8p~VZFUMF5j7ER8rUu84OjOa3tGYI0Y9JgyzUse3NbzdzJnSCjEbK9Na3OKnIcck5hKEAD1u5N4lwGNFEXPF-2kmvjsCem1PaxziRxfX2ARTIGm4rcWJme831i-RPfdOAISJxM5fsPY6vLc66XbVMHtIzmBTBisj~iMGsj0ygNwToLxotXWi-xogeG7wTEzE9-mJyMzC1QiZVZiqaP4Op2U8bQGvaR1VEVhPF63gs5RIGr~9wV3VFT7Afey0163kUTiuxVJ7eeD46DKI8ZJ6GTZafc5ZQSTR2Uzni3nsDU1eC3u2V8f-VucUCra21pFzFmqVUvTce4iHTTiAC45KA__",
            }}
            style={styles.storyImage}
          />
        </View>
        <Text>Story 2</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyImageWrapper}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7KlNxmdLrn40v~k-mkxJxhj~QrIsitzWsexKhH4v0-1sBZD~Sfx4DmBwNEZvMl1a89m2YV8fbreWfhcdUh11tkeQUGmbc0rNIu4LA9NH-o810UlMQhpuDIRh09dReg8K7eJuZboGhwT~M7~moXpm1rvhMxkzCgWzxI3OD-VwHJ9IONQJ~FfF3x5eL2C8nuH55gYJjXDRx7XNOH~FEaeaGAtbqgmoWO~ZfVD3csavOPvOdUczb1A0KYWWM0QqhEZPHIdL1tYI0Z7K7SQbaVkXoSZXtN9tCRX8CaPA96X3PIqt12VJkbcMPjxL54ebT8hOt3uCSuaTmbO81kEiq2SNg__",
            }}
            style={styles.storyImage}
          />
        </View>
        <Text>Story 3</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyImageWrapper}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhSJav7kMJDJVTgf0OD0NUQE3H8akD~RaOlyqC2ZdRtl8GXs6Kd4KSve4ra6MVxbFxY7rtfsdX0w6s7IPj5w42OPlyZCU1NhhpaHAJ7z667i~qkJ7H5cDexYHycYbL806EWsZM8ccpG01zUv3KDaomq9z0rWhrWalumHKNw8WMYiyy0XaY9GJixKVoeUz3KrsgqkNCYhkgSWqyS2O-esgi1XSX8wDs55nlrKm0KLD9J4bicirW9VcAteX7IBADznlnuWkoCgkVt~uha68CIcRxiHUzKPEt9Vs2fR0R9tjh6BC~Z3bWlNRgWZATUM6ZDpIvRUpcZNkh4AbuFOtTHnNQ__",
            }}
            style={styles.storyImage}
          />
        </View>
        <Text>Story 4</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyImageWrapper}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Text>New</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  story: {
    marginRight: 8,
    alignItems: "center",
    gap: 2,
  },
  storyImageWrapper: {
    width: 65,
    height: 65,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
  },
  storyImage: {
    width: 55,
    height: 55,
    borderRadius: 999,
  },
  newStoryButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    fontSize: 40,
    fontWeight: "200",
  },
});

export default ProfileStories;
