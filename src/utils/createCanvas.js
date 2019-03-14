const findCanvasItem = (id, canvasCollection) => {
	return canvasCollection.find((canvas) => canvas.id === id);
};

const removePreviousCanvasCollection = function(canvasCollection) {
	const filteredCollection = canvasCollection.filter((canvas) => canvas.clientHeight && canvas.clientWidth);
	debugger;
	this.setState({ canvasCollection: filteredCollection });
};

const createCanvas = function(id, img, boundingBox) {
	const imgClientWidth = img.offsetWidth;
	const imgClientHeight = img.offsetHeight;
	const imgNaturalWidth = img.naturalWidth;
	const imgNaturalHeight = img.naturalHeight;

	const boundingBoxTotalWidth =
		imgClientWidth - imgClientWidth * (boundingBox.left_col + (1 - boundingBox.right_col));
	const boundingBoxTotalHeight =
		imgClientHeight - imgClientHeight * (boundingBox.top_row + (1 - boundingBox.bottom_row));

	const canvasCollection = this.state.canvasCollection;
	let canvas = findCanvasItem(id, canvasCollection);
	canvas = canvas.canvas;
	const canvasHeight = 70;
	const canvasWidth = boundingBoxTotalWidth * canvasHeight / boundingBoxTotalHeight;
	const ctx = canvas.getContext('2d');

	const startCropWidth = imgNaturalWidth * boundingBox.left_col;
	const startCropHeight = imgNaturalHeight * boundingBox.top_row;
	const endCropWidth =
		imgNaturalWidth /
		((imgNaturalWidth - (imgNaturalWidth * (1 - boundingBox.right_col) + startCropWidth)) / canvasWidth);
	const endCropHeight =
		imgNaturalHeight /
		((imgNaturalHeight - (imgNaturalHeight * (1 - boundingBox.bottom_row) + startCropHeight)) / canvasHeight);

	debugger;

	canvas.height = canvasHeight;
	canvas.width = canvasWidth;
	ctx.drawImage(
		img,
		startCropWidth,
		startCropHeight,
		imgNaturalWidth,
		imgNaturalHeight,
		0,
		0,
		endCropWidth,
		endCropHeight
	);
};

export { createCanvas, findCanvasItem, removePreviousCanvasCollection };
