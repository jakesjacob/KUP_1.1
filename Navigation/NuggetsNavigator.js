import React from "react";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import MyCategoriesScreen from "../Screens/MyCategoriesScreen";

const Stack = createStackNavigator();

const NuggetsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MyCategories" component={MyCategoriesScreen} />
  </Stack.Navigator>
);

export default NuggetsNavigator;
