import React from 'react';
import { Header, Footer, SvgComponent, SettingComponent } from './component';
import { layer } from './interfaces';
import * as htmlToImage from 'html-to-image';
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

  const [modalDisplayClass, setModalDisplayClass] = useState('hide');

  let canvasRef: HTMLElement;
  let renderRef: HTMLElement;

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

  const closeModal = () => {
    setModalDisplayClass('hide');
  }

  /* html-to-image guide
  * https://betterprogramming.pub/heres-why-i-m-replacing-html2canvas-with-html-to-image-in-our-react-app-d8da0b85eadf
  */
  const captureCanvas = () => {
    if (canvasRef && renderRef) {
      htmlToImage.toCanvas(canvasRef).then(function(canvas) {
        renderRef.replaceChildren(canvas);
      });
    }
    setModalDisplayClass('');
    
  };

  const saveCanvas = () => {
    if (canvasRef) {
      htmlToImage.toPng(canvasRef).then(function (dataUrl) {
        saveAs(dataUrl, 'my-node.png');
      });
    }
  }

  const saveAs = (blob: any, fileName: any) =>{
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    // elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    } else {
      elem.target = '_blank';
      elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
  }
  
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div id="canvas">
          <div ref={node => {if (node) canvasRef = node}}  className="img-container">
            {images.length && images.map((i, index) => (
              <SvgComponent layer={i} key={index} />
            ))}
            {/* {images.length && images.map((i) => (
              <img key={i.name} alt={i.name} src={`${iconPath}${i.file}`} style={{opacity: i.opacity}} />
            ))} */}
          </div>
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
        <div onClick={captureCanvas} className="capture-button button">Capture</div>
      </main>
      <Footer></Footer>
      <div className={'modal ' + modalDisplayClass}>
        <div className='modal-content'>
          <div onClick={closeModal} className="close-button button">X</div>
          <div ref={node => {if (node) renderRef = node}} id="append"></div>
          <div onClick={saveCanvas} className="save-button button">Save As Png</div>
        </div>
      </div>
    </div>
  );
}

export default App;
