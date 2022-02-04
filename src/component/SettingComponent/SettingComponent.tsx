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
    <>
      <div>{layer.name}</div>
      <input
        id="typeinp"
        type="range"
        min="0" max="1"
        value={layer.opacity}
        onChange={(event) => opacityChange(event)}
        step=".01"
      />
      <select value={layer.color} onChange={(event) => colorChange(event)}>
        <option value="#6166fb">#6166fb</option>
        <option value="#fb6161">#fb6161</option>
        <option value="#3cda4e">#3cda4e</option>
        <option value="#c800ff">#c800ff</option>
      </select>
    </>
  )
}

export default SettingComponent;
