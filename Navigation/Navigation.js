import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./HomeNavigator";
import NuggetsNavigator from "./NuggetsNavigator";
import NewNuggetScreen from "../screens/NewNuggetScreen";
import HabitsNavigator from "./HabitsNavigator";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      inactiveTintColor: colors.KUPgreen,
      activeTintColor: colors.KUPblue,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="New Nugget"
      component={NewNuggetScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="folder-plus"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Nuggets"
      component={NuggetsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="folder-multiple"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Habits"
      component={HabitsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="clock-time-eight"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);
