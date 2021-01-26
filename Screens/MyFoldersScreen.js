import React from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";
import { Button, List, ListItem, Text } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

const data = new Array(20).fill({
  title: "Folder Title",
  description: "Subtitle for Folder",
});

function MyFoldersScreen({ navigation, route }) {
  const listing = route.params;

  const renderItemAccessory = (props) => (
    <MaterialCommunityIcons
      name="arrow-right-bold"
      color={colors.KUPgreen}
      size={30}
    />
  );
  const renderItemIcon = (props) => (
    <MaterialCommunityIcons name="folder" color={colors.KUPgreen} size={30} />
  );
  const renderItems = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={() => navigation.navigate(routes.MY_NUGGETS, item)}
    />
  );

  return (
    <Screen>
      <Text>{listing.title}</Text>
      <List style={styles.container} data={data} renderItem={renderItems} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyFoldersScreen;
