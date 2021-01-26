import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";

function MyNuggetsScreen({ route }) {
  const listing = route.params;

  return (
    <Screen>
      <Text>{listing.title}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyNuggetsScreen;
