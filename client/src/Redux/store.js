import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Login from "./reducer";

const persistConfig = {
  key: "scholar.web_app",
  storage,
};
let reducers = combineReducers({
  Login,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
