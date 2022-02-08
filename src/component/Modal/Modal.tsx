import React, { Dispatch, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import './Modal.css';

type Props = {
  canvas: HTMLCanvasElement | undefined,
  modalDisplay: boolean,
  setModalDisplay: Dispatch<React.SetStateAction<boolean>>
};

/* html-to-image guide
 * https://betterprogramming.pub/heres-why-i-m-replacing-html2canvas-with-html-to-image-in-our-react-app-d8da0b85eadf
*/
function Modal({ canvas, modalDisplay, setModalDisplay }: Props) {

  let renderRef: HTMLElement;

  useEffect(() => {
    if(canvas){
      renderRef.replaceChildren(canvas);
    }
  });

  const closeModal = () => {
    setModalDisplay(false);
  }

  const saveCanvas = () => {
      htmlToImage.toPng(canvas as HTMLElement).then(function (dataUrl) {
        saveAs(dataUrl, 'my-node.png');
      });
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
    <div className={'modal ' + (modalDisplay ? '' : 'hide')}>
      <div className='modal-content'>
        <div onClick={closeModal} className="close-button button">X</div>
        <div ref={node => { if (node) renderRef = node }} id="append"></div>
        <div onClick={saveCanvas} className="save-button button">Save As Png</div>
      </div>
    </div>
  );
}

export default Modal;