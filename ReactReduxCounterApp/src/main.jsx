import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js"; // your store that you have configured
import { Provider } from 'react-redux' // provider by react redux

// step 2: give access of the store to your whole app
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
