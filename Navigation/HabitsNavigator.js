import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HabitsScreen from "../Screens/MyHabitsScreen";

const Stack = createStackNavigator();

const HabitsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Habits" component={HabitsScreen} />
  </Stack.Navigator>
);

export default HabitsNavigator;
