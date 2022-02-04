import { layer } from '../../interfaces';
import './SettingComponent.css';

type Props = {
  layer: layer,
  onChange?: any
  // children: JSX.Element,
};

const SettingComponent = ({ layer, onChange }: Props) => {
  const opacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value)
    layer.opacity = Number(event.target.value)
    onChange(layer)
  };
  const colorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //console.log(event.target.value)
    layer.color = event.target.value
    onChange(layer)
  };

  return (
    <div>
      <div>Layer: {layer.name}</div>
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
