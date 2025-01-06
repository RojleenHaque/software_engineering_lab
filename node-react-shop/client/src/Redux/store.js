import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';
import { productListReducer, productReducer } from './Reducer/product.js';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Combine reducers
const rootReducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = createStore(persistedReducer);

// Create the persistor
export const persistor = persistStore(store);




// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';

// // Import your reducers
// import userReducer from './reducer/userReducer';

// // Combine reducers
// const rootReducer = combineReducers({
//   user: userReducer,
// });

// // Persist config
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// // Persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });

// // Persistor
// const persistor = persistStore(store);

// export { store, persistor };
