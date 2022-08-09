import { Button } from '../';
// styling in Modal.css


const mainText = `
Great Wave (working title) is an online vector image manipulator I was inspired 
to create after watching several videos about woodblock printing. Currently this 
site is acting as a portfolio piece for my React/Typescript/UI/UX skills.
`

function AboutModal() {
  return (
    <div className='modal-body'>
      <div>{mainText}</div>
      <div className='modal-link-container'>
        <a href="https://github.com/maciebey/great-wave" target="_blank" rel="noreferrer">
          <Button 
          text="View on Github"
          iconName="git" />
        </a>
        <a href="https://www.linkedin.com/in/maciebey/" target="_blank" rel="noreferrer">
          <Button 
          text="Dev on LinkedIn"
          iconName="linkedin" />
        </a>
      </div>
      <div className="modal-video-spacer">
        <div className="modal-video-container">
          <div className="iframe-wrapper">
            <iframe src="//www.youtube-nocookie.com/embed/kEubj3c2How" title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="iframe-wrapper">
            <iframe src="//www.youtube-nocookie.com/embed/IBcB_dYtGUg" title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
