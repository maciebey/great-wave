import './Button.css';
import Icon from '@mdi/react'
import { mdiAccount, mdiInformation, mdiGithub, mdiLinkedin } from '@mdi/js'

// using Material Design Icons: https://dev.materialdesignicons.com/

// reference object so we can pass a sting as iconName
const iconReference: any = {
  "info": mdiInformation,
  "git": mdiGithub,
  "linkedin": mdiLinkedin,
  "user": mdiAccount
}

type Props = {
  // text displayed next to icon
  text?: string,
  // string that corresponds to an import in iconReference above 
  iconName?: string,
  // other icon settings
  iconColor?: string,
  iconSize?: string | number,
  // method to execute as defined in partent component
  onClick?: any
};

function Button({text = "", iconName = "user", iconColor = "#fff", iconSize = 1, onClick}:Props) {
  return (
    <div className="gw-button" onClick={onClick}>
      <Icon path={iconReference[iconName]}
        size={iconSize}
        color={iconColor} />
      <span>{text}</span>
    </div>
  );
}

export default Button;
