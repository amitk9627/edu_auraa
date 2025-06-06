import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./lib/store/store.js";
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { PersistGate } from "redux-persist/integration/react";

import { PersistGate } from 'redux-persist/es/integration/react';

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
