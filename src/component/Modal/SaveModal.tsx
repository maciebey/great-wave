import React, { Dispatch, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
// styling in Modal.css

type Props = {
  canvas: HTMLElement | undefined,
  imgElement: HTMLImageElement | undefined,
  setModalDisplay?: Dispatch<React.SetStateAction<boolean>>
};

/* html-to-image guide
 * https://betterprogramming.pub/heres-why-i-m-replacing-html2canvas-with-html-to-image-in-our-react-app-d8da0b85eadf
*/
function Modal({ canvas, imgElement, setModalDisplay }: Props) {

  let renderRef: HTMLElement;

  useEffect(() => {
    if (imgElement) {
      renderRef.replaceChildren(imgElement);
    }
  });

  const saveCanvas = (fileType: string) => {
    // return if canvas not set correctly
    if (!canvas) return;

    let promise: Promise<string>;
    switch (fileType) {
      case "png":
        promise = htmlToImage.toPng(canvas);
        break;
      case "jpeg":
        promise = htmlToImage.toJpeg(canvas);
        break;
      default:
        // can't proceed without promise set, so just return
        return;
    }
    promise.then((dataUrl) => {
      // TODO: file naming
      saveAs(dataUrl, `my-node.${fileType}`);
    })
  }

  // taken from example in top comment, maybe simplify
  const saveAs = (blob: any, fileName: any) => {
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
    elem.remove();
  }

  return (
    <>
      <div className='modal-body'>
        <div ref={node => { if (node) renderRef = node }} id="modal-canvas"></div>
      </div>
      <div className='modal-footer'>
        <button onClick={() => saveCanvas("png")} className="save-button button">Save As Png</button>
        <button onClick={() => saveCanvas("jpeg")} className="save-button button">Save As Jpeg</button>
      </div>
    </>
  );
}

export default Modal;