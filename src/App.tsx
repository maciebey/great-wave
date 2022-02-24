import { useState, useEffect } from 'react';
import { Header, Footer, SvgComponent, SettingComponent, Modal } from './component';
import { WaveImageData, layer, ChangeObject, NamedLayerSet } from './config'
import * as htmlToImage from 'html-to-image';
import './App.css';


// TODO: component file comments
// TODO: general cleanup of this commponent in specific, mostly for clarification purposes
function App(this: any) {
  
  const [isLoading, setIsLoading] = useState(true); // initial load control
  // TODO: simplify namedLayerSet & images into single useState
  const [namedLayerSet, setNamedLayerSet] = useState<NamedLayerSet>();
  const [images, setImages] = useState<layer[]>([]);
  const [setNames, setSetNames] = useState<string[]>(); // used to hold all set names, used in select
  const [currentSet, setCurrentSet] = useState<number>(0); // index of current data
  const [canvas, setCanvas] = useState<HTMLCanvasElement>(); // ref used to capture image
  const [modalDisplay, setModalDisplay] = useState(false); // modal on/off control 

  // element referenced used to target div for html-to-image
  let canvasRef: HTMLElement | null = null;

  useEffect(() => {
    // will only load data once on page load
    if (isLoading === true) {
      setIsLoading(false);
      setSetNames(Object.values(WaveImageData).map(item => item.name));
      setNamedLayerSet(WaveImageData[currentSet]);
      setImages(WaveImageData[currentSet].layers);
    }
  }, [isLoading, currentSet]);
  
  const handleChange = (changeObject: ChangeObject, index: number) => {
    const newData: layer[] = [...images];

    // color/opacity
    if (changeObject.type === "layer") {
      newData[index] = changeObject.layer!;
      setImages(newData);
    }
    // position
    else {
      const incrementValue = (changeObject.direction === "up") ? 1 : -1;
      const newOrder = newData[changeObject.layerIndex!].order! + incrementValue;
      // find layer that already has the newOrder value and change it
      for (let layer of newData) {
        if (layer.order === newOrder) {
          layer.order += -incrementValue;
          break;
        }
      }
      // change the order of the layer clicked
      newData[changeObject.layerIndex!].order! = newOrder;
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

  const changeSets = (newIndex: number) => {
    setCurrentSet(newIndex);
    setNamedLayerSet(WaveImageData[newIndex]);
    setImages(WaveImageData[newIndex].layers)
  };

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div id="canvas">
          <div className='img-border'>
            <div ref={node => {if (node) canvasRef = node}}  className={"img-container " + namedLayerSet?.ratioClass}>
              {images.length && images.map((i, index) => (
                <SvgComponent layer={i} key={index} />
              ))}
            </div>
          </div>
          <div className='flex-pad' />
          <div className="action-container">
            {setNames && <select value={currentSet} onChange={(event) => changeSets(Number(event.target.value))}>
              {setNames.map((setName, index) => (
                <option value={index} key={setName}>{setName}</option>
              ))}
            </select>}
            <button onClick={captureCanvas} className="capture-button button">Capture</button>
          </div>
        </div>
        <div className="control-container">
          <div className='control-topper'>
            <h2 className='control-tab'>Layers</h2>
          </div>
          <div className="control-setting-components">
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
