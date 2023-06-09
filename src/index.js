import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { provider } from "react-redux";
import store from "../src/Redux-store/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
