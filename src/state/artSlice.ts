import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

import { WaveImageData, layer, ChangeObject } from '../config'

// modify layer method, defined here because reused between history and no history versions
const layerModify = (state: any, action: PayloadAction<ChangeObject>) => {
  const { layerIndex, color, opacity, positionChange } = action.payload
  if (opacity) {
    state.images[layerIndex].opacity = opacity
  }
  if (color) {
    state.images[layerIndex].color = color
  }
  if (positionChange) {
    const newOrder = state.images[layerIndex].order + positionChange;
    // find layer that already has the newOrder value and change it
    for (let layer of state.images) {
      if (layer.order === newOrder) {
        layer.order += -positionChange;
        break;
      }
    }
    // change the order of the layer clicked
    state.images[layerIndex].order = newOrder;
  }
}

// https://react-redux.js.org/tutorials/typescript-quick-start
interface ArtState {
  images: layer[]
}

const initialState: ArtState = {
  // TODO: loading of initial state from cache or based on encoded url
  images: WaveImageData[0].layers
}

export const artSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {
    modifyLayer: layerModify,
    modifyLayerNoHist: layerModify,
    setLayers: (state, action: PayloadAction<layer[]>) => {
      state.images = action.payload
    }
  },
})

export const { modifyLayer, modifyLayerNoHist, setLayers } = artSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectArt = (state: RootState) => state.art.present.images

export default artSlice.reducer
