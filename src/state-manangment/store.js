import { legacy_createStore as createStore } from "redux";
import reducers from './reducers/rootReducer';
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/rootReducer";
const persistConfig={
    key:'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,reducer)
    let store=createStore(persistedReducer)
    let persistor=persistStore(store)
    export{store,persistor}
