import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appReducer from '../slices/app.slice'

const rootReducer = combineReducers({
  app: appReducer,
  // add more reducers
})

const store = configureStore({
  reducer: rootReducer,
  middleware: __DEV__ ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) : (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
