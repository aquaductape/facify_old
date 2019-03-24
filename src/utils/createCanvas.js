const CORS_PROXY = process.env.REACT_APP_CORS_PROXY;

const findCanvasItem = (id, canvasCollection) => {
	return canvasCollection.find((canvas) => canvas.id === id);
};

const removePreviousCanvasCollection = function(canvasCollection) {
	const filteredCollection = canvasCollection.filter((canvas) => canvas.clientHeight && canvas.clientWidth);
	this.setState({ canvasCollection: filteredCollection });
};

const createCanvas = function(id, img, boundingBox) {
	const imgNaturalWidth = img.naturalWidth;
	const imgNaturalHeight = img.naturalHeight;

	const canvasCollection = this.state.canvasCollection;
	let canvas = findCanvasItem(id, canvasCollection);
	canvas = canvas.canvas;
	const ctx = canvas.getContext('2d');

	const downloadedImage = new Image();
	const proxy = CORS_PROXY;
	downloadedImage.crossOrigin = 'Anonymous';

	if (img.src.match(/^data:image\/png;base64,/)) {
		downloadedImage.src = img.src;
	} else {
		downloadedImage.src = proxy + img.src;
	}

	img = downloadedImage;

	img.onload = () => {
		const startCropWidth = imgNaturalWidth * boundingBox.left_col;
		const startCropHeight = imgNaturalHeight * boundingBox.top_row;
		const endCropWidth = imgNaturalWidth * boundingBox.right_col - imgNaturalWidth * boundingBox.left_col;
		const endCropHeight = imgNaturalHeight * boundingBox.bottom_row - imgNaturalHeight * boundingBox.top_row;

		canvas.width = endCropWidth;
		canvas.height = endCropHeight;

		ctx.drawImage(
			img,
			startCropWidth,
			startCropHeight,
			imgNaturalWidth,
			imgNaturalHeight,
			0,
			0,
			imgNaturalWidth,
			imgNaturalHeight
		);

		/** Need work on a React solution for this */
		const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
		const newImg = new Image();
		newImg.src = dataUrl;
		newImg.onload = () => {
			const canvasContainer = document.getElementById('face-container-' + id);
			const countFaces = this.state.countFaces + 1;

			newImg.classList = 'cropped-face';
			newImg.alt = `face ${countFaces}`;
			canvasContainer.appendChild(newImg);
			this.setState({ countFaces });
		};
	};
};

export { createCanvas, findCanvasItem, removePreviousCanvasCollection };
