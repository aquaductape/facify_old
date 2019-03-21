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

	// if (img.src.match(/^https:\/\//)) {
	const downloadedImage = new Image();
	downloadedImage.crossOrigin = 'Anonymous';
	downloadedImage.src = img.src;
	img = downloadedImage;

	img.onload = function() {
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
		newImg.onload = function() {
			const canvasContainer = document.getElementById('face-container-' + id);
			newImg.classList = 'cropped-face';
			canvasContainer.appendChild(newImg);
		};
	};
};

export { createCanvas, findCanvasItem, removePreviousCanvasCollection };
