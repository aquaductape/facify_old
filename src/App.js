import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import { createCanvas, findCanvasItem, removePreviousCanvasCollection } from './utils/createCanvas';
import Stats from './components/Stats/Stats';
const CLARIFAI_API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const app = new Clarifai.App({
	apiKey: CLARIFAI_API_KEY
});

class App extends Component {
	state = {
		input: '',
		imageUrl: '',
		imageStatusOk: null,
		imageSize: null,
		boundingBox: null,
		canvasCollection: [],
		bbIdx: 0
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

		debugger;
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
		const reader = new FileReader();
		debugger;
		reader.addEventListener(
			'load',
			() => {
				const imgURL = reader.result;
				const imgBase64Only = imgURL.replace(/data:.*;base64,/, '');
				app.models
					.predict(Clarifai.FACE_DETECT_MODEL, {
						base64: imgBase64Only
					})
					.then(
						(response) => {
							const box = response.outputs[0].data.regions;
							this.setState({ boundingBox: box });
							this.setState({ imageStatusOk: true });
							this.setState({ imageUrl: imgURL });
						},
						(err) => {
							this.setState({ imageStatusOk: err.status });
							this.setState({ boundingBox: null });
						}
					);
			},
			false
		);

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	onButtonSubmit = (e) => {
		const inputVal = this.state.input.trim();

		if (inputVal === this.state.imageUrl) {
			return null;
		}

		app.models.predict(Clarifai.FACE_DETECT_MODEL, inputVal).then(
			(response) => {
				const box = response.outputs[0].data.regions;
				this.setState({ boundingBox: box });
				this.setState({ imageStatusOk: true });
				this.setState({ imageUrl: inputVal });
			},
			(err) => {
				this.setState({ imageStatusOk: err.status });
				this.setState({ boundingBox: null });
			}
		);
	};

	render() {
		return (
			<div className="App">
				<Logo />
				<main>
					<ImageLinkForm
						inputValue={this.state.input}
						onImageUpload={this.onImageUpload}
						onButtonSubmit={this.onButtonSubmit}
						onInputChange={this.onInputChange}
					/>
					<Stats boundingBox={this.state.boundingBox} />
					<FaceRecognition
						imageStatus={this.state.imageStatusOk}
						imageUrl={this.state.imageUrl}
						onMainImageLoad={this.onMainImageLoad}
						boundingBox={this.state.boundingBox}
						onCanvas={this.onCanvas}
					/>
				</main>
			</div>
		);
	}
}

export default App;
