import { useState, useEffect } from 'react';
import { Header, Footer, SvgComponent, SettingComponent, Modal, SaveModal } from './component';
import { WaveImageData, NamedLayerSet } from './config'
import * as htmlToImage from 'html-to-image';
import './App.css';

// Redux
import { useAppSelector, useAppDispatch } from './state/hooks'
import { setLayers, selectArt } from './state/artSlice'
import { ActionCreators } from 'redux-undo';

// TODO: component file comments
// TODO: general cleanup of this commponent in specific, mostly for clarification purposes
function App(this: any) {
  // Redux State
  const images = useAppSelector(selectArt)
  const dispatch = useAppDispatch()


  const [isLoading, setIsLoading] = useState(true); // initial load control
  // TODO: move more of this UI state into existing or new redux reducers
  const [namedLayerSet, setNamedLayerSet] = useState<NamedLayerSet>();
  const [setNames, setSetNames] = useState<string[]>(); // used to hold all set names, used in select
  const [currentSet, setCurrentSet] = useState<number>(0); // index of current data
  const [canvas, setCanvas] = useState<HTMLElement>(); // ref used to capture image, passed to modal
  const [imgElement, setImgElement] = useState<HTMLImageElement>(); // Image Element that is displayed in modal
  const [modalDisplay, setModalDisplay] = useState(false); // modal on/off control 

  // element referenced used to target div for html-to-image
  let canvasRef: HTMLElement | null = null;

  useEffect(() => {
    // will only load data once on page load
    if (isLoading === true) {
      setIsLoading(false);
      setSetNames(Object.values(WaveImageData).map(item => item.name));
      setNamedLayerSet(WaveImageData[currentSet]);
    }
  }, [isLoading, currentSet]);

  const captureCanvas = () => {
    if (canvasRef) {
      setCanvas(canvasRef)
      htmlToImage.toPng(canvasRef, { backgroundColor: "transparent" }).then(function (p) {
        const img = new Image();
        img.src = p;
        setImgElement(img);
        setModalDisplay(true);
      });
    }
  };

  const changeSets = (newIndex: number) => {
    setCurrentSet(newIndex);
    setNamedLayerSet(WaveImageData[newIndex]);
    dispatch(setLayers(WaveImageData[newIndex].layers));//setImages(WaveImageData[newIndex].layers)
  };

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div id="canvas">
          <div className='img-border'>
            <div ref={node => { if (node) canvasRef = node }} className={"img-container " + namedLayerSet?.ratioClass}>
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
            <div className='spacer'></div>
            <button onClick={()=>dispatch(ActionCreators.undo())}>Undo</button>
            <button onClick={()=>dispatch(ActionCreators.redo())}>Redo</button>
          </div>
          <div className="control-setting-components">
            {images.length && images.map((i, index) => (
              <SettingComponent
                layer={i}
                key={index}
                imagePosition={index}
                imageArrayLength={images.length}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Modal handleClose={() => setModalDisplay(false)} isOpen={modalDisplay}>
        <SaveModal
          canvas={canvas}
          imgElement={imgElement}
          setModalDisplay={setModalDisplay} />
      </Modal>
    </div>
  );
}

export default App;
