import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import * as eva from "@eva-design/eva";
import { default as theme } from "./custom-theme.json"; // <-- Import app theme

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Navigation } from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Navigation />
      </ApplicationProvider>
    </>
  );
}
