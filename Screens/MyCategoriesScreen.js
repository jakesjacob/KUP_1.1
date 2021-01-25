import { Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";

import Screen from "../components/Screen";

function MyCategoriesScreen({ navigation }) {
  return (
    <Screen>
      <Button onPress={() => navigation.navigate(routes.MY_FOLDERS)}>
        MY FOLDERS
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyCategoriesScreen;
