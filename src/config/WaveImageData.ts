import { NamedLayerSet } from '.';

const WaveImageData: NamedLayerSet[] = [
  {
    name: "The Great Wave - Hokusai",
    ratioClass: "ratio-3046-2052",
    layers: [
      // {
      //   "name": "Background",
      //   "file": "set5/7.svg",
      //   "opacity": 1,
      //   "color": "#000000"
      // },
      {
        "name": "Top Sky",
        "file": "set3/5.svg",
        "color": "#f2e7c2"
      },
      {
        "name": "Gradient Sky",
        "file": "set3/4.svg",
        "color": "#ffffff"
      },
      {
        "name": "Light Water",
        "file": "set3/3.svg",
        "color": "#c7efef"
      },
      {
        "name": "Medium Water",
        "file": "set3/2.svg",
        "color": "#059faf"
      },
      {
        "name": "Deep Water / Line",
        "file": "set3/1.svg",
        "color": "#261a5b"
      },
      {
        "name": "Spray",
        "file": "set3/6.svg",
        "color": "#ffffff"
      }
    ]
  },
  {
    name: "Rectangle Test",
    ratioClass: "ratio-1920-1080",
    layers: [
      {
        "name": "One",
        "file": "set4/1.svg",
        "color": "#ef414e"
      },
      {
        "name": "Two",
        "file": "set4/4.svg",
        "color": "#40f294"
      },
      {
        "name": "Three",
        "file": "set4/3.svg",
        "color": "#3db7f4"
      },
      {
        "name": "Four",
        "file": "set4/2.svg",
        "color": "#af43ed"
      }
    ]
  },
  {
    name: "A Beautiful Test Wave",
    ratioClass: "ratio-1",
    layers: [
      {
        "name": "one",
        "file": "set1/1.png",
        "color": "#6166fb"
      },
      {
        "name": "two",
        "file": "set1/2.png",
        "color": "#fb6161"
      },
      {
        "name": "three",
        "file": "set1/3.png",
        "color": "#3cda4e"
      }
    ]
  },
  {
    name: "Test Slices",
    ratioClass: "ratio-1",
    layers: [
      {
        "name": "one",
        "file": "set2/1.png",
        "color": "#6166fb"
      },
      {
        "name": "two",
        "file": "set2/2.png",
        "color": "#fb6161"
      },
      {
        "name": "three",
        "file": "set2/3.png",
        "color": "#3cda4e"
      },
      {
        "name": "four",
        "file": "set2/4.png",
        "color": "#c800ff"
      },
      {
        "name": "five",
        "file": "set2/5.png",
        "color": "#591d69"
      },
      {
        "name": "six",
        "file": "set2/6.png",
        "color": "#2ed6c8"
      },
      {
        "name": "seven",
        "file": "set2/7.png",
        "color": "#ec8320"
      },
      {
        "name": "eight",
        "file": "set2/8.png",
        "color": "#74f17a"
      }
    ]
  }
];

// Loop over each above set definition to give each layer it's default display values
for (let set of WaveImageData) {
  let i = 1
  for (let layer of set.layers) {
    layer.order = i++;
    layer.opacity = 1;
  }
}

export default WaveImageData;