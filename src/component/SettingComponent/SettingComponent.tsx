import { useState } from 'react';
import { layer, ChangeObject } from '../../config';
import { ChromePicker } from 'react-color';
import './SettingComponent.css';

import { useAppDispatch } from '../../state/hooks'
import { modifyLayer, modifyLayerNoHist } from '../../state/artSlice'

type PickerProps = {
  layer: layer,
  tChange: any,
  cChange: any
};

// TODO: latest version of react-color bugged, replace or upgrade https://github.com/casesandberg/react-color/issues/837
const ColorPickerButton = ({layer, tChange, cChange}:PickerProps) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  return (
    <div>
      <button onClick={ () => setDisplayPicker(true) }>Pick Color</button>
      {displayPicker && <div className='picker-popover'>
        <div className='picker-cover' onClick={ () => setDisplayPicker(false) } />
        <ChromePicker
          color={layer.color}
          onChange={ (color) => tChange(color.hex) }
          onChangeComplete={(color) => cChange(color.hex)}
          disableAlpha={true}
        />
      </div>}
    </div>
  )
}

type Props = {
  layer: layer,
  imagePosition: number,
  imageArrayLength: number
};

const SettingComponent = ({ layer, imagePosition, imageArrayLength }: Props) => {
  const dispatch = useAppDispatch()
  const transientChange = (co:ChangeObject) => {dispatch(modifyLayerNoHist( co ))}
  const completedChange = (co:ChangeObject) => {dispatch(modifyLayer( co ))}

  return (
    <div className='control-main' style={{order: layer.order}}>
      <div className='control-header'>
        <div>Layer: {layer.name}</div>
        <button onClick={() => completedChange({layerIndex: imagePosition, positionChange:1})}
          className="button"
          disabled={layer.order === imageArrayLength}>↑</button>
        <button onClick={() => completedChange({layerIndex: imagePosition, positionChange:-1})}
          className="button"
          disabled={layer.order === 1}>↓</button>
      </div>
      <div className='opacity-control'>
        <p>Opacity: {layer.opacity} </p>
        <input
          id="typeinp"
          type="range"
          min="0" max="1"
          value={layer.opacity}
          onChange={(event) => transientChange({layerIndex: imagePosition, opacity: Number(event.target.value)})}
          step=".01"
          onMouseUp={() => completedChange({layerIndex: imagePosition, opacity: Number(layer.opacity)})}
        />
      </div>
      <div className='color-control'>
        <p>Color:</p>
        <div className='color-display' style={{ backgroundColor: layer.color }}></div>
        <ColorPickerButton
          layer={layer}
          tChange={(color: string)=>transientChange({layerIndex: imagePosition, color: color})}
          cChange={(color: string)=>completedChange({layerIndex: imagePosition, color: color})}
        />
      </div>
    </div>
  )
}

export default SettingComponent;
