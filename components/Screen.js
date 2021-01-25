import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";
import { Layout } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style, color }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <Layout style={[styles.view, style, { backgroundColor: colors[color] }]}>
        {children}
      </Layout>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
