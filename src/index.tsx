import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import { initializeIcons } from "office-ui-fabric-react";

const rootElement = document.getElementById("root");
initializeIcons();
render(<App />, rootElement);
