import React from "react";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import MyCategoriesScreen from "../screens/MyCategoriesScreen";
import MyFoldersScreen from "../screens/MyFoldersScreen";
import MyNuggetsScreen from "../screens/MyNuggetsScreen";

const Stack = createStackNavigator();

const NuggetsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="My Categories" component={MyCategoriesScreen} />
    <Stack.Screen name="My Folders" component={MyFoldersScreen} />
    <Stack.Screen name="My Nuggets" component={MyNuggetsScreen} />
  </Stack.Navigator>
);

export default NuggetsNavigator;

// screenOptions={{ headerShown: false }}
