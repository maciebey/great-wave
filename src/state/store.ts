import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import counterReducer from './counterSlice'
import artReducer from './artSlice'

const rootReducer = combineReducers({
  counter: undoable(counterReducer),
  art: undoable(artReducer)
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
