(this.webpackJsonpart=this.webpackJsonpart||[]).push([[0],{100:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(89),i=n.n(o),r=(n(95),n(54)),s=n(11),l=(n(96),n(0));var u=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("a",{href:"https://www.linkedin.com/in/maciebey/",children:"Macie Bey"}),Object(l.jsx)("a",{href:"https://github.com/maciebey/great-wave",children:"View on Github"})]})};n(98);var j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"great-wave"})})},d=n(23);n(100);var b=function(e){var t,n=e.canvas,a=e.modalDisplay,o=e.setModalDisplay;Object(c.useEffect)((function(){n&&t.replaceChildren(n)}));var i=function(e){if(n){var t;switch(e){case"png":t=d.c(n);break;case"jpeg":t=d.b(n);break;default:return}t.then((function(t){r(t,"my-node.".concat(e))}))}},r=function(e,t){var n=window.document.createElement("a");n.href=e,n.download=t,(document.body||document.documentElement).appendChild(n),"function"===typeof n.click?n.click():(n.target="_blank",n.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(n.href),n.remove()},s=function(){o(!1)};return Object(l.jsx)("div",{className:"modal "+(a?"":"hide"),onClick:function(){s()},children:Object(l.jsxs)("div",{className:"modal-content",onClick:function(e){e.stopPropagation()},children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h2",{children:"Your New Print!"}),Object(l.jsx)("button",{onClick:s,className:"close-button button",children:"X"})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsx)("div",{ref:function(e){e&&(t=e)},id:"modal-canvas"})}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("button",{onClick:function(){return i("png")},className:"save-button button",children:"Save As Png"}),Object(l.jsx)("button",{onClick:function(){return i("jpeg")},className:"save-button button",children:"Save As Jpeg"})]})]})})},f=n(90),h=(n(268),function(e){var t=e.layer,n=e.onChange,a=Object(c.useState)(!1),o=Object(s.a)(a,2),i=o[0],r=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return r(!0)},children:"Pick Color"}),i&&Object(l.jsxs)("div",{className:"picker-popover",children:[Object(l.jsx)("div",{className:"picker-cover",onClick:function(){return r(!1)}}),Object(l.jsx)(f.ChromePicker,{color:t.color,onChange:function(e,c){var a={type:"layer",layer:t};a.layer.color=e.hex,n(a)},disableAlpha:!0})]})]})}),p=function(e){var t=e.layer,n=e.imagePosition,c=e.imageArrayLength,a=e.onChange,o=function(e){a({type:"position",direction:e})};return Object(l.jsxs)("div",{className:"control-main",children:[Object(l.jsxs)("div",{className:"control-header",children:[Object(l.jsxs)("div",{children:["Layer: ",t.name]}),Object(l.jsx)("button",{onClick:function(){return o("up")},className:"button",disabled:0===n,children:"\u2191"}),Object(l.jsx)("button",{onClick:function(){return o("down")},className:"button",disabled:n===c-1,children:"\u2193"})]}),Object(l.jsxs)("div",{className:"opacity-control",children:[Object(l.jsxs)("p",{children:["Opacity: ",t.opacity," "]}),Object(l.jsx)("input",{id:"typeinp",type:"range",min:"0",max:"1",value:t.opacity,onChange:function(e){return function(e){var n={type:"layer",layer:t};n.layer.opacity=Number(e.target.value),a(n)}(e)},step:".01"})]}),Object(l.jsxs)("div",{className:"color-control",children:[Object(l.jsx)("p",{children:"Color:"}),Object(l.jsx)("div",{className:"color-display",style:{backgroundColor:t.color}}),Object(l.jsx)(h,{layer:t,onChange:function(e){return a(e)}})]})]})},m=(n(269),function(e){var t=e.layer,n=(e.onChange,t.file),c=t.opacity,a=t.color,o="colorMask".concat(n);return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"400",height:"400",children:[Object(l.jsx)("defs",{children:Object(l.jsxs)("filter",{id:o,children:[Object(l.jsx)("feFlood",{floodColor:a,result:"flood"}),Object(l.jsx)("feComposite",{in:"SourceGraphic",in2:"flood",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]})}),Object(l.jsx)("image",{preserveAspectRatio:"xMidYMax meet",width:"100%",height:"100%",xlinkHref:"".concat("/great-wave/assets/").concat(n),filter:"url(#".concat(o,")"),opacity:c})]})}),v=[{name:"The Great Wave - Hokusai",layers:[{name:"Water One",file:"set3/blue_light.svg",opacity:1,color:"#c7efef"},{name:"Water Two",file:"set3/blue_dark.svg",opacity:1,color:"#261a5b"},{name:"Water Three",file:"set3/blue_med.svg",opacity:1,color:"#059faf"},{name:"Spray",file:"set3/splash.svg",opacity:1,color:"#ffffff"}]},{name:"A Beautiful Test Wave",layers:[{name:"one",file:"set1/1.png",opacity:1,color:"#6166fb"},{name:"two",file:"set1/2.png",opacity:1,color:"#fb6161"},{name:"three",file:"set1/3.png",opacity:1,color:"#3cda4e"}]},{name:"Test Slices",layers:[{name:"one",file:"set2/1.png",opacity:1,color:"#6166fb"},{name:"two",file:"set2/2.png",opacity:1,color:"#fb6161"},{name:"three",file:"set2/3.png",opacity:1,color:"#3cda4e"},{name:"four",file:"set2/4.png",opacity:1,color:"#c800ff"},{name:"five",file:"set2/5.png",opacity:1,color:"#591d69"},{name:"six",file:"set2/6.png",opacity:1,color:"#2ed6c8"},{name:"seven",file:"set2/7.png",opacity:1,color:"#ec8320"},{name:"eight",file:"set2/8.png",opacity:1,color:"#74f17a"}]}];n(270);var O=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),f=i[0],h=i[1],O=Object(c.useState)(),y=Object(s.a)(O,2),g=y[0],x=y[1],k=Object(c.useState)(0),C=Object(s.a)(k,2),w=C[0],N=C[1],S=Object(c.useState)(),P=Object(s.a)(S,2),A=P[0],M=P[1],E=Object(c.useState)(!1),L=Object(s.a)(E,2),T=L[0],D=L[1],F=null;return Object(c.useEffect)((function(){!0===n&&(a(!1),x(Object.values(v).map((function(e){return e.name}))),h(v[w].layers))}),[n,w]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{id:"canvas",children:[Object(l.jsx)("div",{ref:function(e){e&&(F=e)},className:"img-container",children:f.length&&f.map((function(e,t){return Object(l.jsx)(m,{layer:e},t)}))}),Object(l.jsxs)("div",{className:"action-container",children:[g&&Object(l.jsx)("select",{value:w,onChange:function(e){return t=Number(e.target.value),N(t),void h(v[t].layers);var t},children:g.map((function(e,t){return Object(l.jsx)("option",{value:t,children:e},e)}))}),Object(l.jsx)("button",{onClick:function(){F&&d.a(F,{backgroundColor:"transparent"}).then((function(e){M(e),D(!0)}))},className:"capture-button button",children:"Capture"})]})]}),Object(l.jsx)("div",{className:"control-container",children:f.length&&f.map((function(e,t){return Object(l.jsx)(p,{layer:e,imagePosition:t,imageArrayLength:f.length,onChange:function(e){return function(e,t){if("layer"===e.type){var n=Object(r.a)(f);n[t]=e.layer,h(n)}else{var c="up"===e.direction?t-1:t+1,a=Object(r.a)(f),o=a[t];a[t]=a[c],a[c]=o,h(a)}}(e,t)}},t)}))})]}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{canvas:A,modalDisplay:T,setModalDisplay:D})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),y()},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){}},[[271,1,2]]]);
//# sourceMappingURL=main.fd749795.chunk.js.map