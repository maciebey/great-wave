# Great Wave – Multi-Layered Image Manipulator

Inspired by the techniques used to create wood print art such as the iconic piece "The Great Wave of Kanagawa" by Hokusai, this project allows users to manipulate specially crafted image layers to create new variations.

Live on Github Pages: https://maciebey.github.io/great-wave/

Tech: React, Typescript, Redux

This project is currently in a working proof of concept state. Current features:
- Independently modify image layers (opacity/color picker/layer order)
- Undo/Redo of modifications via redux-undo
- Flatten and export as PNG/JPG file
- Live App (currently GitHub Pages)

Planned features (roughly ordered from highest to lowest priority):
- UI cleanup/redesign, including color changes, image/viewport sizes, responsiveness
- Better exporting, more formats and ability to set resolution size
- Additional manipulation settings, some possibilities:
  - color sets to choose from and apply, for user inspiration
  - randomize colors button
  - color gradients (replace or implement new color picker required)
  - adding "grain" over specific layers or entire image to emulate wood printing
- Add additional image sets, remove POC/Test images
- Locally cache user selections, restore on reload
- Locally save versions, restore and switch
- Share to social media, have ability to load state based on link
- STRETCH: export to 3rd party print service



## Local Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Basic create-react-app usage. Clone and then:
```
$ cd great-wave
$ npm i
$ npm start
```
App will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

