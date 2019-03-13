import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import { createCanvas, findCanvasItem } from './utils/createCanvas';
const CLARIFAI_API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const app = new Clarifai.App({
	apiKey: CLARIFAI_API_KEY
});

class App extends Component {
	state = {
		input: 'https://i.kym-cdn.com/photos/images/original/000/994/346/7ac.jpg',
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

		if (!canvasExist) {
			canvasCollection.push(canvasItem);

			this.setState({ canvasCollection: canvasCollection });
		}
	};

	onMainImageLoad = (e, boundingBoxArr) => {
		// const bbIdx = this.state.bbIdx;
		const img = e.target;
		// const boundingBox = boundingBoxArr[bbIdx].region_info.bounding_box;
		boundingBoxArr.forEach(({ region_info }) => {
			const boundingBox = region_info.bounding_box;
			const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
			createCanvas.call(this, id, img, boundingBox);
		});

		// this.setState({ imageSize: img });
		// this.setState({ bbIdx: bbIdx + 1 });
	};

	onButtonSubmit = (e) => {
		// this.setState({ bbCollectionSize: [] });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			(response) => {
				const box = response.outputs[0].data.regions;
				this.setState({ boundingBox: box });
				this.setState({ imageStatusOk: true });
				this.setState({ imageUrl: this.state.input });
			},
			(err) => {
				this.setState({ imageStatusOk: err.status });
				this.setState({ boundingBox: null });
				// there was an error
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
						onButtonSubmit={this.onButtonSubmit}
						onInputChange={this.onInputChange}
					/>
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
