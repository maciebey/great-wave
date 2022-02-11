import { useState } from 'react';
import { layer, ChangeObject } from '../../interfaces';
import { ChromePicker } from 'react-color';
import './SettingComponent.css';

type PickerProps = {
  layer: layer,
  onChange?: any
};

// TODO: latest version of react-color bugged, replace or upgrade https://github.com/casesandberg/react-color/issues/837
const ColorPickerButton = ({layer, onChange}:PickerProps) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  const colorChange = (c: any, event: React.ChangeEvent<HTMLInputElement>) => {
    const change: ChangeObject = {type: "layer", layer:layer}
    change.layer!.color = c.hex
    onChange(change)
  };

  return (
    <div>
      <button onClick={ () => setDisplayPicker(true) }>Pick Color</button>
      {displayPicker && <div className='picker-popover'>
        <div className='picker-cover' onClick={ () => setDisplayPicker(false) } />
        <ChromePicker
          color={layer.color}
          onChange={ colorChange }
          disableAlpha={true}
        />
      </div>}
    </div>
  )
}

type Props = {
  layer: layer,
  imagePosition: number,
  imageArrayLength: number,
  onChange?: any
};

const SettingComponent = ({ layer, imagePosition, imageArrayLength, onChange }: Props) => {

  const opacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const change: ChangeObject = {type: "layer", layer:layer}
    change.layer!.opacity = Number(event.target.value)
    onChange(change)
  };

  const positionChange = (direction: string) => {
    const change: ChangeObject = {type: "position", direction:direction}
    onChange(change)
  }

  return (
    <div className='control-main'>
      <div className='control-header'>
        <div>Layer: {layer.name}</div>
        <button onClick={() => positionChange("up")} className="button" disabled={imagePosition === 0}>↑</button>
        <button onClick={() => positionChange("down")} className="button" disabled={imagePosition === imageArrayLength - 1}>↓</button>
      </div>
      <div className='opacity-control'>
        <p>Opacity: {layer.opacity} </p>
        <input
          id="typeinp"
          type="range"
          min="0" max="1"
          value={layer.opacity}
          onChange={(event) => opacityChange(event)}
          step=".01"
        />
      </div>
      <div className='color-control'>
        <p>Color:</p>
        <div className='color-display' style={{ backgroundColor: layer.color }}></div>
        <ColorPickerButton
          layer={layer}
          onChange={(change:ChangeObject) => onChange(change)}
        />
      </div>
    </div>
  )
}

export default SettingComponent;
