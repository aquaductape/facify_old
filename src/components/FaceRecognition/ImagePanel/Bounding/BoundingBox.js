import React from 'react';

const BoundingBox = ({ boundingBox }) => {
	const renderBox = {
		top: boundingBox.top_row * 100 + '%',
		right: 100 - boundingBox.right_col * 100 + '%',
		bottom: 100 - boundingBox.bottom_row * 100 + '%',
		left: boundingBox.left_col * 100 + '%'
	};
	return <div className="bounding-box" style={renderBox} />;
};

export default BoundingBox;
