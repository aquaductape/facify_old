(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(84)},39:function(e,t,n){},42:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(25),r=n.n(i),c=(n(39),n(8)),l=n.n(c),s=n(26),u=n(27),g=n(28),d=n(33),m=n(29),f=n(10),h=n(32),v=(n(42),n(14)),p=n.n(v),b=n(30),E=n.n(b),x=function(e){var t=e.inputValue,n=e.onInputChange,a=e.onImageUpload,i=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"multifile-upload-group"},o.a.createElement("input",{onChange:a,type:"file",name:"file",id:"file",className:"input-file--hidden"}),o.a.createElement("label",{className:"label-input-file",htmlFor:"file"},"Upload Image"),o.a.createElement("input",{autoFocus:!0,spellCheck:"false",value:t,onChange:n,className:"input-text",type:"text",placeholder:"Or type URL..."})),o.a.createElement("button",{onClick:i,className:"input-button"},"Detect"))))},w=(n(82),function(e){var t=e.display;return t="none"===t.display?t:{display:"block"},o.a.createElement("div",{style:t,className:"error-message"},"Oops! Something went wrong :( Perhapes the url is incorrect or your image is too large...")}),y=function(e){var t=e.boxId,n=e.boundingBox,a=e.onToggleBoundingBoxHighlight,i={top:100*n.top_row+"%",right:100-100*n.right_col+"%",bottom:100-100*n.bottom_row+"%",left:100*n.left_col+"%"};return o.a.createElement("div",{id:"face-bounding-box-"+t,className:"bounding-box highlight--bounding-box",style:i,onMouseOver:a,onMouseOut:a})},B=function(e){var t=e.imageUrl,n=e.onMainImageLoad,a=e.boundingBox,i=e.onToggleBoundingBoxHighlight;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container--image-demo"},o.a.createElement("img",{onLoad:function(e){return n(e,a)},className:"image-demo",src:t,alt:""}),a.map(function(e){var t=e.region_info,n=t.bounding_box,a="".concat(n.top_row).concat(n.left_col).concat(n.bottom_row).concat(n.right_col);return o.a.createElement(y,{key:a,boxId:a,boundingBox:t.bounding_box,onToggleBoundingBoxHighlight:i})})))},U=function(e){var t=e.boxId,n=e.onCanvas,a=e.onToggleBoundingBoxHighlight;return o.a.createElement("div",{id:"face-container-"+t,className:"face-container",onMouseOver:a,onMouseOut:a},o.a.createElement("canvas",{style:{display:"none",height:"70px"},ref:function(e){return e?n(e,t):null}}))},L=function(e){var t=e.display,n=e.boundingBox,a=n&&1===n.length?"Face":"Faces";return n&&o.a.createElement("div",{style:t,className:"stats"},o.a.createElement("p",null,"Found ","".concat(n.length," ").concat(a)," "))},I=function(e){var t=e.boundingBox,n=e.onCanvas,a=e.onToggleBoundingBoxHighlight,i=null;return t&&(i=t.length>4?null:{justifyContent:"left"}),o.a.createElement("div",{style:i,className:"info-demo"},o.a.createElement(L,{className:"stats--info-demo",display:null,boundingBox:t}),t.map(function(e){var t=e.region_info.bounding_box,i="".concat(t.top_row).concat(t.left_col).concat(t.bottom_row).concat(t.right_col);return o.a.createElement(U,{key:i,boxId:i,onCanvas:n,onToggleBoundingBoxHighlight:a})}))},k=function(e){var t=e.display,n=e.imageStatus,a=e.imageUrl,i=e.boundingBox,r=e.onMainImageLoad,c=e.onCanvas,l=e.onToggleBoundingBoxHighlight;return t="none"===t.display?t:{display:"grid"},null===n?null:400!==n?o.a.createElement("div",{style:t,className:"image-panel"},o.a.createElement(B,{imageUrl:a,boundingBox:i,onMainImageLoad:r,onToggleBoundingBoxHighlight:l}),o.a.createElement(I,{boundingBox:i,onCanvas:c,onToggleBoundingBoxHighlight:l})):o.a.createElement(w,{display:t})},C=function(){return o.a.createElement("div",{id:"logo"},"\u15b4\u15e9\u1455I\u15b4Y")},S=function(e,t){return t.find(function(t){return t.id===e})},_=function(e){var t=e.filter(function(e){return e.clientHeight&&e.clientWidth});this.setState({canvasCollection:t})},N=function(e,t,n){var a=t.naturalWidth,o=t.naturalHeight,i=this.state.canvasCollection,r=S(e,i),c=(r=r.canvas).getContext("2d"),l=new Image;l.crossOrigin="Anonymous",l.src=t.src,(t=l).onload=function(){var i=a*n.left_col,l=o*n.top_row,s=a*n.right_col-a*n.left_col,u=o*n.bottom_row-o*n.top_row;r.width=s,r.height=u,c.drawImage(t,i,l,a,o,0,0,a,o);var g=r.toDataURL("image/jpeg",1),d=new Image;d.src=g,d.onload=function(){var t=document.getElementById("face-container-"+e);d.classList="cropped-face",t.appendChild(d)}}},O=n(31),F=function(e,t,n,a){return new(n||(n=Promise))(function(o,i){function r(e){try{l(a.next(e))}catch(t){i(t)}}function c(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(r,c)}l((a=a.apply(e,t||[])).next())})};var D=function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(){return t(function(){var e=new DataView(n.result);if(65496===e.getUint16(0,!1))for(var t=e.byteLength,a=2;a<t;){var o=e.getUint16(a,!1);if(a+=2,65505===o){if(a+=2,1165519206!==e.getUint32(a,!1))return;a+=6;var i=18761===e.getUint16(a,!1);a+=e.getUint32(a+4,i);var r=e.getUint16(a,i);a+=2;for(var c=0;c<r;c++)if(274===e.getUint16(a+12*c,i))return e.getUint16(a+12*c+8,i)}else{if(65280!==(65280&o))break;a+=e.getUint16(a,!1)}}}())},n.readAsArrayBuffer(e.slice(0,65536))})},A=function(e,t,n){return new Promise(function(a){var o=new FileReader;o.onload=function(){var e=o.result,i=new Image;i.onload=function(){var e=document.createElement("canvas"),o=e.getContext("2d"),r=i.width,c=i.height,l=t>=5&&t<=8?[c,r]:[r,c],s=Object(O.a)(l,2),u=s[0],g=s[1],d=u>n?n/u:1;switch(r*=d,c*=d,e.width=u*d,e.height=g*d,t){case 2:o.transform(-1,0,0,1,r,0);break;case 3:o.transform(-1,0,0,-1,r,c);break;case 4:o.transform(1,0,0,-1,0,c);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,c,0);break;case 7:o.transform(0,-1,-1,0,c,r);break;case 8:o.transform(0,-1,1,0,0,c)}o.drawImage(i,0,0,r,c),a(e.toDataURL("image/jpeg"))},i.src=e},o.readAsDataURL(e)})},H=function(e,t){return F(this,void 0,void 0,l.a.mark(function n(){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",D(e).then(function(n){return A(e,n||1,t||999999)}));case 1:case"end":return n.stop()}},n)}))};var T=function(e,t){var n=function(n){var a=new FileReader;a.onload=function(e){var a=e.target.result,o=new Image;o.onload=function(){var e=o.width,a=o.height,i=document.createElement("canvas"),r=i.getContext("2d");switch(4<n&&n<9?(i.width=a,i.height=e):(i.width=e,i.height=a),n){case 2:r.transform(-1,0,0,1,e,0);break;case 3:r.transform(-1,0,0,-1,e,a);break;case 4:r.transform(1,0,0,-1,0,a);break;case 5:r.transform(0,1,1,0,0,0);break;case 6:r.transform(0,1,-1,0,a,0);break;case 7:r.transform(0,-1,-1,0,a,e);break;case 8:r.transform(0,-1,1,0,0,e)}r.drawImage(o,0,0),t(i.toDataURL())},o.src=a},a.readAsDataURL(e)},a=new FileReader;a.onload=function(e){var t=new DataView(e.target.result);if(65496!==t.getUint16(0,!1))return n(-2);for(var a=t.byteLength,o=2;o<a;){var i=t.getUint16(o,!1);if(o+=2,65505===i){if(1165519206!==t.getUint32(o+=2,!1))return n(-1);var r=18761===t.getUint16(o+=6,!1);o+=t.getUint32(o+4,r);var c=t.getUint16(o,r);o+=2;for(var l=0;l<c;l++)if(274===t.getUint16(o+12*l,r))return n(t.getUint16(o+12*l+8,r))}else{if(65280!==(65280&i))break;o+=t.getUint16(o,!1)}}return n(-1)},a.readAsArrayBuffer(e)},j=(n(83),function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-loader"},o.a.createElement("div",{className:"fulfilling-square-spinner"},o.a.createElement("div",{className:"spinner-inner"}))),o.a.createElement("div",{className:"loading-description"},o.a.createElement("h2",null,"Creating Base64 Image URL"),o.a.createElement("p",null,"Applying rotation to compensate for EXIF orientation when needed")))}),M=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-loader"},o.a.createElement("div",{className:"swapping-squares-spinner"},o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}))),o.a.createElement("div",{className:"loading-description"},o.a.createElement("h2",null,"Locating Faces"),o.a.createElement("p",null,"Waiting for Clarifai's Server to read your Image")))},R=function(e){var t;switch(e.loading){case"yes:client":t=o.a.createElement(j,null);break;case"yes:clarifai":t=o.a.createElement(M,null);break;default:t=null}return t},q=new p.a.App({apiKey:"f816634000e34c3b9c5271e13f690d5f"}),V=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",imageUrl:"",imageStatusOk:null,imageSize:null,boundingBox:null,canvasCollection:[],isLoading:!1},n.clarifaiDetectFace=function(e){var t,a=e;"object"===typeof e&&(a=e.base64,t=e.base64.replace(/data:.*;base64,/,""),e.base64=t),q.models.predict(p.a.FACE_DETECT_MODEL,e).then(function(e){var t=e.outputs[0].data.regions||[];n.setState({isLoading:!1}),n.setState({boundingBox:t}),n.setState({imageStatusOk:!0}),n.setState({imageUrl:a})},function(e){n.setState({isLoading:!1}),n.setState({imageStatusOk:e.status}),n.setState({boundingBox:null}),n.setState({imageUrl:a})})},n.onInputChange=function(e){n.setState({input:e.target.value})},n.onCanvas=function(e,t){var a=n.state.canvasCollection.slice(),o={id:t,canvas:e};S(t,a)||(a.push(o),n.setState({canvasCollection:a}))},n.onMainImageLoad=function(e,t){var a=e.target;t.forEach(function(e){var t=e.region_info.bounding_box,o="".concat(t.top_row).concat(t.left_col).concat(t.bottom_row).concat(t.right_col);N.call(Object(f.a)(n),o,a,t)}),_.call(Object(f.a)(n),n.state.canvasCollection.slice())},n.onImageUpload=function(e){var t=e.target.files[0];if(!t)return null;n.setState({isLoading:"yes:client"}),E.a.parseMetaData(t,function(){var e=Object(s.a)(l.a.mark(function e(a){var o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((o=a.exif&&a.exif.getAll())&&!(o.GPSVersionID&&o.FocalLength>=4)){e.next=9;break}return e.next=4,H(t);case 4:i=e.sent,n.setState({isLoading:"yes:clarifai"}),n.clarifaiDetectFace({base64:i}),e.next=10;break;case 9:T(t,function(e){n.setState({isLoading:"yes:clarifai"}),n.clarifaiDetectFace({base64:e})});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},n.onButtonSubmit=function(e){var t=n.state.input.trim();if(t===n.state.imageUrl)return null;n.setState({isLoading:"yes:clarifai"}),n.clarifaiDetectFace(t)},n.onToggleBoundingBoxHighlight=function(e){var t,n=e.target,a=document.querySelectorAll(".highlight"),o=document.querySelectorAll(".bounding-box");if("mouseover"===e.type)if(a.forEach(function(e){e.classList.remove("highlight")}),o.forEach(function(e){e.classList.remove("highlight--bounding-box")}),n.id.match("face-bounding-box-")){t=n.id.replace("face-bounding-box-",""),n.classList.add("highlight--bounding-box");var i=document.getElementById("face-container-"+t);i.classList.add("highlight"),i.scrollIntoView()}else{var r=n.parentNode;t=r.id.replace("face-container-",""),r.classList.add("highlight"),document.getElementById("face-bounding-box-"+t).classList.add("highlight--bounding-box")}else a.forEach(function(e){e.classList.remove("highlight")}),o.forEach(function(e){e.classList.add("highlight--bounding-box")})},n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e,t;return"yes:client"===this.state.isLoading||"yes:clarifai"===this.state.isLoading?(e={height:"500px"},t={display:"none"}):(e=null,t={display:"block"}),o.a.createElement("div",{className:"App"},o.a.createElement(C,null),o.a.createElement("main",{style:e},o.a.createElement(x,{inputValue:this.state.input,onImageUpload:this.onImageUpload,onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),o.a.createElement(R,{loading:this.state.isLoading}),o.a.createElement(L,{display:t,boundingBox:this.state.boundingBox}),o.a.createElement(k,{display:t,imageStatus:this.state.imageStatusOk,imageUrl:this.state.imageUrl,onMainImageLoad:this.onMainImageLoad,boundingBox:this.state.boundingBox,onCanvas:this.onCanvas,onToggleBoundingBoxHighlight:this.onToggleBoundingBoxHighlight})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.f27efe43.chunk.js.map