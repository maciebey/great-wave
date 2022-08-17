import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

import { layer, ChangeObject } from '../config'

interface ArtState {
  // setNames: string[],
  images: layer[]
}

const initialState: ArtState = {
  // setNames: Object.values(WaveImageData).map(item => item.name),
  images: []
}

export const artSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {
    // TODO: organize these methods better, if we have a bunch of "noHistory"
    // versions want to not reuse code over and over
    // TODO: fix PayloadAction type, issues when trying to use ChangeObject
    setSingleLayerOpacity: (state, action: PayloadAction<any>) => {
      let {index, opacity} = action.payload
      state.images[index].opacity = opacity
    },
    setSingleLayerOpacityNoHistory: (state, action: PayloadAction<any>) => {
      let {index, opacity} = action.payload
      state.images[index].opacity = opacity
    },
    setLayers: (state, action: PayloadAction<layer[]>) => {
      state.images = action.payload
    }
  },
})

export const { setSingleLayerOpacity, setSingleLayerOpacityNoHistory, setLayers } = artSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectArt = (state: RootState) => state.art.present.images

export default artSlice.reducer
