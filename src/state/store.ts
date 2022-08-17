import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import undoable, { excludeAction }from 'redux-undo'
import counterReducer from './counterSlice'
import artReducer from './artSlice'

// array of reducer actions we don't want to apply to history
const noHistoryActions = [
  'art/modifyLayerNoHist',
]

const rootReducer = combineReducers({
  counter: undoable(counterReducer),
  art: undoable(artReducer, {filter: excludeAction(noHistoryActions)})
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
