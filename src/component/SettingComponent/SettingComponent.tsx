import { layer, ChangeObject } from '../../interfaces';
import './SettingComponent.css';

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
  const colorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const change: ChangeObject = {type: "layer", layer:layer}
    change.layer!.color = event.target.value
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
        <select value={layer.color} onChange={(event) => colorChange(event)}>
          <option value="#6166fb">#6166fb</option>
          <option value="#fb6161">#fb6161</option>
          <option value="#3cda4e">#3cda4e</option>
          <option value="#c800ff">#c800ff</option>
        </select>
      </div>
    </div>
  )
}

export default SettingComponent;
