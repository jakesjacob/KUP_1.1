import { Button, List, Icon, ListItem } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import routes from "../navigation/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

const data = new Array(8).fill({
  title: "Category Title",
  description: "Subtitle for Category",
});

function MyCategoriesScreen({ navigation }) {
  const renderItemAccessory = (props) => (
    <MaterialCommunityIcons
      name="arrow-right-bold"
      color={colors.KUPgreen}
      size={30}
    />
  );
  const renderItemIcon = (props) => (
    <MaterialCommunityIcons
      name="folder-multiple"
      color={colors.KUPgreen}
      size={30}
    />
  );
  const renderItems = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={() => navigation.navigate(routes.MY_FOLDERS, item)}
    />
  );
  const newCategory = (props) => (
    <MaterialCommunityIcons
      name="folder-plus"
      color={colors.KUPgreen}
      size={30}
    />
  );

  return (
    <Screen style={styles.container}>
      <Button style={styles.button} size="small" accessoryRight={newCategory}>
        NEW CATEGORY
      </Button>
      <List data={data} renderItem={renderItems} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: "40%",
    alignSelf: "center",
    margin: 5,
  },
});

export default MyCategoriesScreen;
