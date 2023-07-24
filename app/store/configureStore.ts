import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const configuration = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
