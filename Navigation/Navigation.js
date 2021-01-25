import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./HomeNavigator";
import NuggetsNavigator from "./NuggetsNavigator";
import NewNuggetScreen from "../Screens/NewNuggetScreen";
import HabitsNavigator from "./HabitsNavigator";

const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Tab.Navigator>
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
      name="My Nuggets"
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
