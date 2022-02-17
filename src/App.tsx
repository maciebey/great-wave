import { useState, useEffect } from 'react';
import { Header, Footer, SvgComponent, SettingComponent, Modal } from './component';
import { WaveImageData, layer, ChangeObject } from './config'
import * as htmlToImage from 'html-to-image';
import './App.css';


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

  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [modalDisplay, setModalDisplay] = useState(false);

  let canvasRef: HTMLElement | null = null;

  useEffect(() => {
    // will only load data once on page load
    if (isLoading === true) {
      setIsLoading(false);
      setImages(WaveImageData[1].layers)
    }
  }, [isLoading]);
  
  const handleChange = (changeObject: ChangeObject, index: number) => {
    // color/opacity
    if (changeObject.type === "layer") {
      const newData: layer[] = [...images];
      newData[index] = changeObject.layer!;
      setImages(newData);
    }
    // position
    else {
      const swapIndex = (changeObject.direction === "up") ? (index - 1) : (index + 1)
      const newData: layer[] = [...images];
      const temp = newData[index];
      newData[index] = newData[swapIndex];
      newData[swapIndex] = temp;
      setImages(newData);
    }
  };

  const captureCanvas = () => {
    if (canvasRef) {
      htmlToImage.toCanvas(canvasRef, {backgroundColor: "transparent"}).then(function(c) {
        setCanvas(c)
        setModalDisplay(true);
      });
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div id="canvas">
          <div ref={node => {if (node) canvasRef = node}}  className="img-container">
            {images.length && images.map((i, index) => (
              <SvgComponent layer={i} key={index} />
            ))}
          </div>
          <div className="action-container">
            <button onClick={captureCanvas} className="capture-button button">Capture</button>
          </div>
        </div>
        <div className="control-container">
          {images.length && images.map((i, index) => (
            <SettingComponent
              layer={i}
              key={index}
              imagePosition={index}
              imageArrayLength={images.length}
              onChange={(changeObject:ChangeObject) => handleChange(changeObject, index)}
            />
          ))}
        </div>
      </main>
      <Footer></Footer>
      <Modal
        canvas={canvas}
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay} />
    </div>
  );
}

export default App;
