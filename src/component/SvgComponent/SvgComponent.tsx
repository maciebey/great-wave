import { layer } from '../../config';
import './SvgComponent.css';

const iconPath = process.env.PUBLIC_URL + '/assets/';

type Props = {
  layer: layer,
  onChange?: any
};

const SvgComponent = ({ layer, onChange }: Props) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   //console.log(event.target.value)
  //   layer.opacity = Number(event.target.value)
  //   onChange(layer)
  // };

  const { file, opacity, color } = layer
  const filterName = `colorMask${file}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
      <defs>
        <filter id={filterName}>
          <feFlood floodColor={color} result="flood" />
          <feComposite in="SourceGraphic" in2="flood" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
        </filter>
      </defs>
      <image preserveAspectRatio="xMidYMax meet" width="100%" height="100%" xlinkHref={`${iconPath}${file}`} filter={`url(#${filterName})`} opacity={opacity} />
    </svg>
  )
}

export default SvgComponent;
