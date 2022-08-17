import { useState } from 'react';
import { AboutModal, Button, Modal } from '../';
import './Header.css';

function Header() {
  const [modalDisplay, setModalDisplay] = useState(false); // modal on/off control
  return (
    <header>
      <div>
        <h1>great-wave</h1>
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
