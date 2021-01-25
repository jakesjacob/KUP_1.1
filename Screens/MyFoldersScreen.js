import React from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";
import { Button } from "@ui-kitten/components";

import Screen from "../components/Screen";

function MyFoldersScreen({ navigation }) {
  return (
    <Screen>
      <Button onPress={() => navigation.navigate(routes.MY_NUGGETS)}>
        MY NUGGETS
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyFoldersScreen;
