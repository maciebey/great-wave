import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

import { layer } from '../config'

// Define a type for the slice state
interface ArtState {
  // setNames: string[],
  images: layer[]
}

// Define the initial state using that type
const initialState: ArtState = {
  // setNames: Object.values(WaveImageData).map(item => item.name),
  images: []
}

export const artSlice = createSlice({
  name: 'art',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLayers: (state, action: PayloadAction<layer[]>) => {
      state.images = action.payload
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { setLayers } = artSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectArt = (state: RootState) => state.art.present.images

export default artSlice.reducer
