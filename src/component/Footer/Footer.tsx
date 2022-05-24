import './Footer.css';
import { Button } from '../';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/maciebey/great-wave" target="_blank" rel="noreferrer">
        <Button 
        text="View on Github"
        iconName="git" />
      </a>
    </footer>
  );
}

export default Footer;
