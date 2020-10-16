import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './modules/rootReducer';
import resistedReducers from './persistReducers'

const store = createStore(
    resistedReducers(rootReducer),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store);

export { store, persistor };
