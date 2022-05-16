import { ReactElement, useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import "./Modal.css";

type Props = {
  children?: ReactElement,
  isOpen?: boolean,
  handleClose: any
};

// modified from https://blog.logrocket.com/build-modal-with-react-portals/
function Modal({ children, isOpen, handleClose }: Props) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: any) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {/* <CSSTransition
				in={isOpen}
				timeout={{ entry: 0, exit: 300 }}
				unmountOnExit
				classNames="modal"
				nodeRef={nodeRef}
			> */}
      <div className="modal" ref={nodeRef}>
        <div className="modal-content">
          <div className='modal-header'>
            <h2>Your New Print!</h2>
            <button onClick={handleClose} className="close-button button">X</button>
          </div>

          {children}
        </div>
      </div>
      {/* </CSSTransition> */}
    </ReactPortal>
  );
}

export default Modal;