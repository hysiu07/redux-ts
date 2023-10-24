import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import { rootReducers } from './rootReducers'
import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga'
import { mySaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const persistConfig = {
  key: 'root',
    storage,
  blacklist: ['count','users']
}

export const persistedReducers = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware)
});
export const persistor = persistStore(store)
sagaMiddleware.run(mySaga)