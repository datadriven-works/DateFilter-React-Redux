import { createStore } from 'redux';
import updateDates from '../reducers/date-reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
key: 'root',
storage,
}

const persistedReducer = persistReducer(persistConfig, updateDates)

export default () => {
let store = createStore(persistedReducer)
let persistor = persistStore(store)
return { store, persistor }
}

