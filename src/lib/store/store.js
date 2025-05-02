import { combineReducers, configureStore } from "@reduxjs/toolkit";
import User from "../slices/user"; // example slice
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  User: User, // add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { persistedReducer } from "./rootReducer";

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),

//   devTools: process.env.NODE_ENV !== "production",
// });

// export const persistor = persistStore(store);
