import {applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
import authMiddleware from './auth/middleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['signUp'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(ReduxThunk), applyMiddleware(authMiddleware), applyMiddleware(logger)),
);

export const persistor = persistStore(store);
