import React from 'react';

const BoundingInfo = ({ boxId, imageUrl, boundingBox, onCanvas }) => {
	const height = 30;
	const boundingBoxWidth = (boundingBox.right_col - boundingBox.left_col) * 100;
	const boundingBoxHeight = (boundingBox.bottom_row - boundingBox.top_row) * 100;
	const infoImage = {
		backgroundImage: `url('${imageUrl}')`,
		// width: bbCollectionSize.width * height / bbCollectionSize.height,
		// backgroundSize: bbCollectionSize.width * height / bbCollectionSize.height * 10 + '%',
		backgroundPosition: `${boundingBox.left_col * 100}% ${boundingBox.top_row * 100}%`,
		height: height
	};
	debugger;
	return (
		<div>
			<canvas ref={(canvas) => (canvas ? onCanvas(canvas, boxId) : null)} />
		</div>
	);
};

export default BoundingInfo;
