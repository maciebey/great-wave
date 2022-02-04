import React from 'react';
import { Header, Footer, SvgComponent, SettingComponent } from './component';
import { layer } from './interfaces';
import './App.css';

import { useState, useEffect } from 'react';

/*
https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
https://www.carlrippon.com/react-children-with-typescript/
https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/
https://stackoverflow.com/questions/57843369/react-typescript-custom-hooks-property-prop-name-does-not-exist-on-type
*/

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
      <Header></Header>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
