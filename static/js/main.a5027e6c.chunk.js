(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/face_detect.dd64472b.svg"},25:function(e,t,a){e.exports=a.p+"static/media/logo.ca2e54ed.svg"},28:function(e,t,a){e.exports=a(74)},33:function(e,t,a){},34:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),r=a.n(i),l=(a(33),a(21)),c=a(22),s=a(26),u=a(23),g=a(7),m=a(27),d=(a(34),a(11)),h=a.n(d),f=a(12),p="",b="";f.isBrowser&&(p="multifile-upload-group--browser-view",b="input-group--browser-view");var v=function(e){var t=e.inputValue,a=e.inputPlaceHolder,n=e.onInputChange,i=e.onImageUpload,r=e.onButtonSubmit,l=e.onWebCamButtonClick,c=e.inputRef,s="";return"Or type URL..."===a&&(s="basic-placeholder"),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"input-group ".concat(b)},o.a.createElement("div",{className:"multifile-upload-group ".concat(p)},o.a.createElement(f.BrowserView,null,o.a.createElement("button",{id:"webcam-button",onClick:l,className:"input-button--webcam"},"WebCam")),o.a.createElement("input",{onChange:i,type:"file",name:"file",id:"file",className:"input-file--hidden"}),o.a.createElement("label",{className:"label-input-file",htmlFor:"file"},"Upload"),o.a.createElement("input",{ref:c,autoFocus:!0,spellCheck:"false",value:t,onChange:n,className:"input-text ".concat(s),type:"text",placeholder:a})),o.a.createElement("button",{onClick:r,className:"input-button"},"Detect"))))},E=(a(70),function(){return o.a.createElement("div",{className:"error-message"},"Oops! Something went wrong :( Perhapes the url is incorrect or your image is too large...")}),C=function(e){var t=e.boxId,a=e.boundingBox,n=e.onToggleBoundingBoxHighlight,i={top:100*a.top_row+"%",right:100-100*a.right_col+"%",bottom:100-100*a.bottom_row+"%",left:100*a.left_col+"%"};return o.a.createElement("div",{id:"face-bounding-box-"+t,className:"bounding-box highlight--bounding-box",style:i,onMouseOver:n,onMouseOut:n})},B=function(e){var t=e.imageUrl,a=e.onMainImageLoad,n=e.boundingBox,i=e.onToggleBoundingBoxHighlight;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container--image-demo"},o.a.createElement("img",{onLoad:function(e){return a(e,n)},className:"image-demo",src:t,alt:""}),n.map(function(e){var t=e.region_info,a=t.bounding_box,n="".concat(a.top_row).concat(a.left_col).concat(a.bottom_row).concat(a.right_col);return o.a.createElement(C,{key:n,boxId:n,boundingBox:t.bounding_box,onToggleBoundingBoxHighlight:i})})))},w=function(e){var t=e.boxId,a=e.onCanvas,n=e.onToggleBoundingBoxHighlight;return o.a.createElement("div",{id:"face-container-"+t,className:"face-container",onMouseOver:n,onMouseOut:n},o.a.createElement("canvas",{style:{display:"none",height:"70px"},ref:function(e){return e?a(e,t):null}}))},x=function(e){var t=e.loading,a=e.boundingBox,n=a&&1===a.length?"Face":"Faces";return!t&&a?o.a.createElement("div",{className:"stats"},o.a.createElement("p",null,"Found ","".concat(a.length," ").concat(n)," ")):null},y=(a(71),function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-loader"},o.a.createElement("div",{className:"fulfilling-square-spinner"},o.a.createElement("div",{className:"spinner-inner"}))),o.a.createElement("div",{className:"loading-description"},o.a.createElement("h2",null,"Creating Base64 Image URL"),o.a.createElement("p",null,"Applying rotation to compensate for EXIF orientation when needed")))}),I=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container-loader"},o.a.createElement("div",{className:"swapping-squares-spinner"},o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}),o.a.createElement("div",{className:"square"}))),o.a.createElement("div",{className:"loading-description"},o.a.createElement("h2",null,"Locating Faces"),o.a.createElement("p",null,"Waiting for Clarifai's Server to read your Image")))},L=function(){return o.a.createElement("div",{className:"container-loader"},o.a.createElement("div",{className:"lds-ring"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)))},k=function(e){var t;switch(e.loading){case"yes:client":t=o.a.createElement(y,null);break;case"yes:clarifai":t=o.a.createElement(I,null);break;case"yes:client-images":t=o.a.createElement(L,null);break;default:t=null}return t},O=function(e){var t=e.areCroppedImagesLoading,a=e.boundingBox,n=e.onCanvas,i=e.onToggleBoundingBoxHighlight,r=!!t&&"yes:client-images",l=null;return a&&(l=a.length>4?null:{justifyContent:"left"}),o.a.createElement("div",{style:l,className:"info-demo"},o.a.createElement(x,{className:"stats--info-demo",boundingBox:a}),o.a.createElement(k,{loading:r}),a.map(function(e){var t=e.region_info.bounding_box,a="".concat(t.top_row).concat(t.left_col).concat(t.bottom_row).concat(t.right_col);return o.a.createElement(w,{key:a,boxId:a,onCanvas:n,onToggleBoundingBoxHighlight:i})}))},N=function(e){var t=e.loading,a=e.areCroppedImagesLoading,n=e.imageStatusOk,i=e.imageUrl,r=e.boundingBox,l=e.onMainImageLoad,c=e.onCanvas,s=e.onToggleBoundingBoxHighlight;return null===n?null:400!==n||t?400===n||t?null:o.a.createElement("div",{className:"image-panel"},o.a.createElement(B,{imageUrl:i,boundingBox:r,onMainImageLoad:l,onToggleBoundingBoxHighlight:s}),o.a.createElement(O,{areCroppedImagesLoading:a,boundingBox:r,onCanvas:c,onToggleBoundingBoxHighlight:s})):o.a.createElement(E,null)},S=function(){return o.a.createElement("div",{id:"logo"},"\u15b4\u15e9\u1455I\u15b4Y")},_=function(e,t){return t.find(function(t){return t.id===e})},U=function(e){var t=e.filter(function(e){return e.clientHeight&&e.clientWidth});this.setState({canvasCollection:t})},W=function(e,t,a){var n=this,o=t.naturalWidth,i=t.naturalHeight,r=this.state.canvasCollection,l=_(e,r),c=(l=l.canvas).getContext("2d"),s=new Image;s.crossOrigin="Anonymous",t.src.match(/^data:image\/png;base64,/)?s.src=t.src:s.src="https://cors-anywhere.herokuapp.com/"+t.src,(t=s).onload=function(){var r=o*a.left_col,s=i*a.top_row,u=o*a.right_col-o*a.left_col,g=i*a.bottom_row-i*a.top_row;l.width=u,l.height=g,c.drawImage(t,r,s,o,i,0,0,o,i);var m=l.toDataURL("image/jpeg",1),d=new Image;d.src=m,d.onload=function(){var t=document.getElementById("face-container-"+e);d.classList="cropped-face",t.appendChild(d),n.setState({areCroppedImagesLoading:!1})}}};var F=function(e,t){var a=function(a){var n=new FileReader;n.onload=function(e){var n=e.target.result,o=new Image;o.onload=function(){var e=o.width,n=o.height,i=document.createElement("canvas"),r=i.getContext("2d");switch(4<a&&a<9?(i.width=n,i.height=e):(i.width=e,i.height=n),a){case 2:r.transform(-1,0,0,1,e,0);break;case 3:r.transform(-1,0,0,-1,e,n);break;case 4:r.transform(1,0,0,-1,0,n);break;case 5:r.transform(0,1,1,0,0,0);break;case 6:r.transform(0,1,-1,0,n,0);break;case 7:r.transform(0,-1,-1,0,n,e);break;case 8:r.transform(0,-1,1,0,0,e)}r.drawImage(o,0,0),t(i.toDataURL())},o.src=n},n.readAsDataURL(e)},n=new FileReader;n.onload=function(e){var t=new DataView(e.target.result);if(65496!==t.getUint16(0,!1))return a(-2);for(var n=t.byteLength,o=2;o<n;){var i=t.getUint16(o,!1);if(o+=2,65505===i){if(1165519206!==t.getUint32(o+=2,!1))return a(-1);var r=18761===t.getUint16(o+=6,!1);o+=t.getUint32(o+4,r);var l=t.getUint16(o,r);o+=2;for(var c=0;c<l;c++)if(274===t.getUint16(o+12*c,r))return a(t.getUint16(o+12*c+8,r))}else{if(65280!==(65280&i))break;o+=t.getUint16(o,!1)}}return a(-1)},n.readAsArrayBuffer(e)},H=(a(72),a(24)),R=a.n(H),T=a(25),A=a.n(T),j=function(e){var t=e.loading,a=e.imageStatusOk,n=e.boundingBox,i=e.isWebCamOn;return t||n||i||400===a?null:o.a.createElement("header",null,o.a.createElement("div",{className:"header-title--container"},o.a.createElement("div",{className:"header-title"},o.a.createElement("div",{className:"header-title--logo"},o.a.createElement("img",{src:A.a,alt:"Facify Logo"})),o.a.createElement("h1",null,"Find ",o.a.createElement("span",null,"Faces")))),o.a.createElement("div",{className:"header-image"},o.a.createElement("img",{src:R.a,alt:"Laptop featuring human face art graphic"})),o.a.createElement("div",{className:"header-text"},o.a.createElement("p",null,"By using Computer Vision AI, you'll receive"),o.a.createElement("ul",null,o.a.createElement("li",null,"Crop Faces"),o.a.createElement("li",null,"Fixed"," ",o.a.createElement("strong",null,o.a.createElement("a",{href:"https://www.howtogeek.com/254830/why-your-photos-dont-always-appear-correctly-rotated/",target:"_blank",rel:"noopener noreferrer"},"Exif"))," ","Orientation"))))},D=(a(73),function(e){var t=e.onCaptureButtonClick;return o.a.createElement("div",{className:"capture-button-container"},o.a.createElement("div",{onClick:t,className:"capture-button"}))}),M=function(e){var t=e.startWebCam,a=e.isWebCamOn,n=e.onCaptureButtonClick;return(a=!!a)?o.a.createElement("div",null,o.a.createElement("div",{className:"video-container"},o.a.createElement("video",{ref:t,id:"player",autoPlay:!0})),o.a.createElement("canvas",{style:{display:"none"},id:"canvas-webcam",width:"320",height:"240"}),o.a.createElement(D,{onCaptureButtonClick:n})):null};var q=function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var a=e.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return new Blob([n],{type:a})},P=new h.a.App({apiKey:"f816634000e34c3b9c5271e13f690d5f"}),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={input:"",inputPlaceHolder:"Or type URL...",imageUrl:"",imageStatusOk:null,imageSize:null,boundingBox:null,canvasCollection:[],isWebCamOn:!1,isLoading:!1,areCroppedImagesLoading:!1},a.inputRef=o.a.createRef(),a.clarifaiDetectFace=function(e){var t,n=e;"object"===typeof e&&(n=e.base64,t=e.base64.replace(/data:.*;base64,/,""),e.base64=t),P.models.predict(h.a.FACE_DETECT_MODEL,e).then(function(e){var t=e.outputs[0].data.regions||[];a.setState({isLoading:!1}),a.setState({areCroppedImagesLoading:!0}),a.setState({boundingBox:t}),a.setState({imageStatusOk:!0}),a.setState({imageUrl:n}),a.setState({input:""})},function(e){a.setState({isLoading:!1}),a.setState({imageStatusOk:e.status}),a.setState({boundingBox:null}),a.setState({imageUrl:n})})},a.setFocusOnInput=function(){a.inputRef.current.focus()},a.resetOrientation=function(e){F(e,function(e){a.setState({isLoading:"yes:clarifai"}),a.clarifaiDetectFace({base64:e})})},a.stopWebCam=function(){var e=document.getElementById("player");if(!e)return null;document.getElementById("webcam-button").textContent="WebCam",e.srcObject.getVideoTracks().forEach(function(e){return e.stop()}),a.setState({isWebCamOn:!1})},a.onInputChange=function(e){a.setState({input:e.target.value})},a.onCanvas=function(e,t){var n=a.state.canvasCollection.slice(),o={id:t,canvas:e};_(t,n)||(n.push(o),a.setState({canvasCollection:n}))},a.onMainImageLoad=function(e,t){var n=e.target;t.forEach(function(e){var t=e.region_info.bounding_box,o="".concat(t.top_row).concat(t.left_col).concat(t.bottom_row).concat(t.right_col);W.call(Object(g.a)(a),o,n,t)}),U.call(Object(g.a)(a),a.state.canvasCollection.slice())},a.onImageUpload=function(e){var t=e.target.files[0];if(!t)return null;a.stopWebCam(),a.setState({isLoading:"yes:client"}),a.resetOrientation(t)},a.onButtonSubmit=function(e){var t=a.state.input.trim();if(t===a.state.imageUrl)return null;a.stopWebCam(),a.setState({inputPlaceHolder:t}),a.setState({isLoading:"yes:clarifai"}),a.clarifaiDetectFace(t)},a.startWebCam=function(e){if(!e)return null;navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){e.srcObject=t})},a.onWebCamButtonClick=function(e){"WebCam"===e.target.textContent?(e.target.textContent="Stop",a.setState({isWebCamOn:!0})):(e.target.textContent="WebCam",a.stopWebCam(),a.setState({isWebCamOn:!1}))},a.onCaptureButtonClick=function(){var e=document.getElementById("player"),t=document.getElementById("canvas-webcam");t.getContext("2d").drawImage(e,0,0,t.width,t.height);var n=t.toDataURL("image/jpeg",1),o=q(n);a.stopWebCam(),a.resetOrientation(o)},a.onToggleBoundingBoxHighlight=function(e){var t,a=e.target,n=document.querySelectorAll(".highlight"),o=document.querySelectorAll(".bounding-box");if("mouseover"===e.type)if(n.forEach(function(e){e.classList.remove("highlight")}),o.forEach(function(e){e.classList.remove("highlight--bounding-box")}),a.id.match("face-bounding-box-")){t=a.id.replace("face-bounding-box-",""),a.classList.add("highlight--bounding-box");var i=document.getElementById("face-container-"+t);i.classList.add("highlight"),i.scrollIntoView()}else{var r=a.parentNode;t=r.id.replace("face-container-",""),r.classList.add("highlight"),document.getElementById("face-bounding-box-"+t).classList.add("highlight--bounding-box")}else n.forEach(function(e){e.classList.remove("highlight")}),o.forEach(function(e){e.classList.add("highlight--bounding-box")})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,null),o.a.createElement("main",null,o.a.createElement(v,{inputValue:this.state.input,inputPlaceHolder:this.state.inputPlaceHolder,onImageUpload:this.onImageUpload,onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange,onWebCamButtonClick:this.onWebCamButtonClick,inputRef:this.inputRef}),o.a.createElement(M,{onCaptureButtonClick:this.onCaptureButtonClick,startWebCam:this.startWebCam,isWebCamOn:this.state.isWebCamOn}),o.a.createElement(j,{isWebCamOn:this.state.isWebCamOn,boundingBox:this.state.boundingBox,loading:this.state.isLoading,imageStatusOk:this.state.imageStatusOk}),o.a.createElement(k,{loading:this.state.isLoading}),o.a.createElement(x,{loading:this.state.isLoading,boundingBox:this.state.boundingBox}),o.a.createElement(N,{loading:this.state.isLoading,areCroppedImagesLoading:this.state.areCroppedImagesLoading,imageStatusOk:this.state.imageStatusOk,imageUrl:this.state.imageUrl,onMainImageLoad:this.onMainImageLoad,boundingBox:this.state.boundingBox,onCanvas:this.onCanvas,onToggleBoundingBoxHighlight:this.onToggleBoundingBoxHighlight})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a5027e6c.chunk.js.map