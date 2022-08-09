import { layer } from '../../config';
import './SvgComponent.css';

const iconPath = process.env.PUBLIC_URL + '/assets/';

type Props = {
  layer: layer
};

//TODO: want to look and see if can change this to use z-index for ordering,
// as currently changing ordering in DOM might be rerendering intense
const SvgComponent = ({ layer }: Props) => {
  const { file, opacity, color } = layer
  const filterName = `colorMask${file}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{zIndex: layer.order}}>
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
