import React from 'react';

const BoundingBox = ({ boxId, boundingBox, onToggleBoundingBoxHighlight }) => {
	const renderBox = {
		top: boundingBox.top_row * 100 + '%',
		right: 100 - boundingBox.right_col * 100 + '%',
		bottom: 100 - boundingBox.bottom_row * 100 + '%',
		left: boundingBox.left_col * 100 + '%'
	};
	return (
		<div
			id={'face-bounding-box-' + boxId}
			className="bounding-box highlight--bounding-box"
			style={renderBox}
			onMouseOver={onToggleBoundingBoxHighlight}
			onMouseOut={onToggleBoundingBoxHighlight}
		/>
	);
};

export default BoundingBox;
