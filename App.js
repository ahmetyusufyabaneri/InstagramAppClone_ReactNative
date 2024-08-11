import {SafeAreaView} from "react-native";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Screen from "./src/Screen";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
