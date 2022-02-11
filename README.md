# Great Wave – Multi-Layered Image Manipulator

Inspired by the techniques used to create wood print art such as the iconic piece "The Great Wave of Kanagawa" by Hokusai, this project allows users to manipulate specially crafted image layers to create new variations.

Live on Github Pages: https://maciebey.github.io/great-wave/

Tech: React, Typescript

This project is currently in a working proof of concept state. Current features:
- Independently modify image layers (opacity/color picker/layer order)
- Flatten and export as PNG/JPG file
- Live App (currently GitHub Pages)

Planned features (ordered from most to least priority):
- Replace POC images with initial set
- Undo/Redo of changes
- Additional manipulation settings
- Add additional image set(s), and create switcher
- Locally cache user selections, restore on reload
- Locally save versions, restore and switch
- STRETCH: export to 3rd party print service
- Replace or implement new color picker



## Local Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Basic create-react-app usage. Clone and then:
```
$ cd great-wave
$ npm i
$ npm start
```
App will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

