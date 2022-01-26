import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';

/*
https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
https://www.carlrippon.com/react-children-with-typescript/
https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/
https://stackoverflow.com/questions/57843369/react-typescript-custom-hooks-property-prop-name-does-not-exist-on-type
*/

const iconPath = process.env.PUBLIC_URL + '/assets/';

interface layer {
  name: string,
  file: string,
  opacity: number,
  color: string
}

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

const SvgComponent = ({ layer, onChange }: Props) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   //console.log(event.target.value)
  //   layer.opacity = Number(event.target.value)
  //   onChange(layer)
  // };

  const {file, opacity, color} = layer
  const filterName = `colorMask${file}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
      <defs>
        <filter id={filterName}>
          <feFlood floodColor={color} result="flood" />
          <feComposite in="SourceGraphic" in2="flood" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
        </filter>
      </defs>
      <image width="100%" height="100%" xlinkHref={`${iconPath}${file}`} filter={`url(#${filterName})`} opacity={opacity} />
    </svg>
  )
}

function App(this: any) {
  const [images, setImages] = useState<layer[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // will only load data once on page load
    if (isLoading === true) {
      setIsLoading(false);
      const data: layer[] = [
        {
          "name": "one",
          "file": "1.png",
          "opacity": 1,
          "color": "#6166fb"
        },
        {
          "name": "two",
          "file": "2.png",
          "opacity": 1,
          "color": "#fb6161"
        },
        {
          "name": "three",
          "file": "3.png",
          "opacity": 1,
          "color": "#3cda4e"
        }
      ]
      setImages(data)
    }
  }, [isLoading]);
  
  const handleChange = (layer: layer, index: number) => {
    const newData: layer[] = [...images]
    newData[index] = layer;
    setImages(newData);
  };
  
  return (
    <div className="App">
      <div className="interface">
        <div className="img-container">
          {images.length && images.map((i, index) => (
            <SvgComponent layer={i} key={index} />
          ))}
          {/* {images.length && images.map((i) => (
            <img key={i.name} alt={i.name} src={`${iconPath}${i.file}`} style={{opacity: i.opacity}} />
          ))} */}
        </div>
        <div className="control-container">
          {images.length && images.map((i, index) => (
            <SettingComponent
              layer={i}
              key={index}
              onChange={(layer:layer) => handleChange(layer, index)}
            />
          ))}
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
