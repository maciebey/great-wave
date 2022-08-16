import { useState } from 'react';
import { AboutModal, Button, Modal } from '../';
import './Header.css';

import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { increment, decrement, incrementByAmount } from '../../state/counterSlice'
import { ActionCreators } from 'redux-undo';

function Header() {
  const [modalDisplay, setModalDisplay] = useState(false); // modal on/off control

  const count = useAppSelector((state) => state.counter.present.value)
  const dispatch = useAppDispatch()

  return (
    <header>
      <div>
        <h1>great-wave</h1>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementByAmount(2))}>+ +</button>
        <button onClick={()=>dispatch(ActionCreators.undo())}>Undo</button>
        <Button 
          text="About"
          iconName="info"
          onClick={() => setModalDisplay(true)}/>
      </div>
      <Modal handleClose={() => setModalDisplay(false)} isOpen={modalDisplay}>
        <AboutModal />
      </Modal>
    </header>
  );
}

export default Header;
