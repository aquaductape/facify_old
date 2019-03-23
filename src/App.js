import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Stats from './components/Stats/Stats';
import { createCanvas, findCanvasItem, removePreviousCanvasCollection } from './utils/createCanvas';
import getImageUrlFrontCamera from './lib/getDataUrl';
import Loading from './components/Loading/Loading';
import Landing from './components/Landing/Landing';
import Webcam from './components/Webcam/Webcam';
import dataURItoBlob from './lib/dataURItoBlob';

const CLARIFAI_API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const app = new Clarifai.App({
	apiKey: CLARIFAI_API_KEY
});

class App extends Component {
	state = {
		input: '',
		inputPlaceHolder: 'Or type URL...',
		imageUrl: '',
		imageStatusOk: null,
		imageSize: null,
		boundingBox: null,
		canvasCollection: [],
		isWebCamOn: false,
		isLoading: false,
		areCroppedImagesLoading: false
	};

	// removed auto focus to input
	// on mobile it opens the keyboard which is distracting
	// leaving this unused ref for reminder
	inputRef = React.createRef();

	clarifaiDetectFace = (input) => {
		let imgBase64Only;
		let dataURL = input;

		if (typeof input === 'object') {
			dataURL = input.base64;
			imgBase64Only = input.base64.replace(/data:.*;base64,/, '');
			input.base64 = imgBase64Only;
		}
		app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
			(response) => {
				const box = response.outputs[0].data.regions || [];
				this.setState({ isLoading: false });
				this.setState({ areCroppedImagesLoading: true });
				this.setState({ boundingBox: box });
				this.setState({ imageStatusOk: true });
				this.setState({ imageUrl: dataURL });
				this.setState({ input: '' });
			},
			(err) => {
				this.setState({ isLoading: false });
				this.setState({ imageStatusOk: err.status });
				this.setState({ boundingBox: null });
				this.setState({ imageUrl: dataURL });
			}
		);
	};

	setFocusOnInput = () => {
		this.inputRef.current.focus();
	};

	resetOrientation = (file) => {
		getImageUrlFrontCamera(file, (imgBase64) => {
			this.setState({ isLoading: 'yes:clarifai' });
			this.clarifaiDetectFace({ base64: imgBase64 });
		});
	};

	stopWebCam = () => {
		const player = document.getElementById('player');
		if (!player) {
			return null;
		}

		const webCamButton = document.getElementById('webcam-button');
		webCamButton.textContent = 'WebCam';

		player.srcObject.getVideoTracks().forEach((track) => track.stop());

		this.setState({ isWebCamOn: false });
	};

	onInputChange = (e) => {
		this.setState({ input: e.target.value });
	};

	onCanvas = (canvas, id) => {
		const canvasCollection = this.state.canvasCollection.slice();

		const canvasItem = {
			id,
			canvas
		};
		const canvasExist = findCanvasItem(id, canvasCollection);

		if (!canvasExist) {
			canvasCollection.push(canvasItem);

			this.setState({ canvasCollection: canvasCollection });
		}
	};

	onMainImageLoad = (e, boundingBoxArr) => {
		const img = e.target;

		boundingBoxArr.forEach(({ region_info }) => {
			const boundingBox = region_info.bounding_box;
			const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
			createCanvas.call(this, id, img, boundingBox);
		});

		removePreviousCanvasCollection.call(this, this.state.canvasCollection.slice());
	};

	onImageUpload = (e) => {
		const file = e.target.files[0];

		if (!file) {
			return null;
		}

		this.stopWebCam();
		this.setState({ isLoading: 'yes:client' });
		this.resetOrientation(file);
	};

	onButtonSubmit = (e) => {
		const inputVal = this.state.input.trim();

		if (inputVal === this.state.imageUrl) {
			return null;
		}

		this.stopWebCam();
		this.setState({ inputPlaceHolder: inputVal });
		this.setState({ isLoading: 'yes:clarifai' });
		this.clarifaiDetectFace(inputVal);
	};

	startWebCam = (player) => {
		if (!player) {
			return null;
		}
		const constraints = {
			video: true
		};

		navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
			player.srcObject = stream;
		});
	};

	onWebCamButtonClick = (e) => {
		if (e.target.textContent === 'WebCam') {
			e.target.textContent = 'Stop';
			this.setState({ isWebCamOn: true });
		} else {
			e.target.textContent = 'WebCam';
			this.stopWebCam();
			this.setState({ isWebCamOn: false });
		}
	};

	onCaptureButtonClick = () => {
		const player = document.getElementById('player');
		const canvas = document.getElementById('canvas-webcam');
		const ctx = canvas.getContext('2d');

		ctx.drawImage(player, 0, 0, canvas.width, canvas.height);
		const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
		const blob = dataURItoBlob(dataUrl);

		this.stopWebCam();
		this.resetOrientation(blob);
	};

	onToggleBoundingBoxHighlight = (e) => {
		// Not a React Solution, use refs instead when have time
		const element = e.target;
		const facesDemo = document.querySelectorAll('.highlight');
		const facesBounding = document.querySelectorAll('.bounding-box');
		let id;
		if (e.type === 'mouseover') {
			facesDemo.forEach((face) => {
				face.classList.remove('highlight');
			});
			facesBounding.forEach((face) => {
				face.classList.remove('highlight--bounding-box');
			});
			if (element.id.match('face-bounding-box-')) {
				id = element.id.replace('face-bounding-box-', '');
				element.classList.add('highlight--bounding-box');
				const faceDemoSelected = document.getElementById('face-container-' + id);
				faceDemoSelected.classList.add('highlight');
				faceDemoSelected.scrollIntoView();
			} else {
				const parent = element.parentNode;
				id = parent.id.replace('face-container-', '');
				parent.classList.add('highlight');
				const faceDemoSelected = document.getElementById('face-bounding-box-' + id);
				faceDemoSelected.classList.add('highlight--bounding-box');
			}
		} else {
			facesDemo.forEach((face) => {
				face.classList.remove('highlight');
			});
			facesBounding.forEach((face) => {
				face.classList.add('highlight--bounding-box');
			});
		}
	};

	render() {
		return (
			<div className="App">
				<Logo />
				<main>
					<ImageLinkForm
						inputValue={this.state.input}
						inputPlaceHolder={this.state.inputPlaceHolder}
						onImageUpload={this.onImageUpload}
						onButtonSubmit={this.onButtonSubmit}
						onInputChange={this.onInputChange}
						onWebCamButtonClick={this.onWebCamButtonClick}
						inputRef={this.inputRef}
					/>
					<Webcam
						onCaptureButtonClick={this.onCaptureButtonClick}
						startWebCam={this.startWebCam}
						isWebCamOn={this.state.isWebCamOn}
					/>
					<Landing
						isWebCamOn={this.state.isWebCamOn}
						boundingBox={this.state.boundingBox}
						loading={this.state.isLoading}
						imageStatusOk={this.state.imageStatusOk}
					/>
					<Loading loading={this.state.isLoading} />
					<Stats loading={this.state.isLoading} boundingBox={this.state.boundingBox} />
					<FaceRecognition
						loading={this.state.isLoading}
						areCroppedImagesLoading={this.state.areCroppedImagesLoading}
						imageStatusOk={this.state.imageStatusOk}
						imageUrl={this.state.imageUrl}
						onMainImageLoad={this.onMainImageLoad}
						boundingBox={this.state.boundingBox}
						onCanvas={this.onCanvas}
						onToggleBoundingBoxHighlight={this.onToggleBoundingBoxHighlight}
					/>
				</main>
			</div>
		);
	}
}

export default App;
