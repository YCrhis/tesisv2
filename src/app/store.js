import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)



const store = configureStore({
    reducer: { user: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store


/* export default configureStore({
    reducer: {
        user: userReducer
    },
    middelware: getDefaultMiddleware({
        serializableCheck: false,
    })
}) */