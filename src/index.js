import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./Services/Reducers/Index";
// Import the createStore function from Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
// Import the rootReducer

// Create the Redux store
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

 
reportWebVitals();
