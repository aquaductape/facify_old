import React from 'react';

const Stats = ({ display, boundingBox }) => {
	const strFace = boundingBox && boundingBox.length > 1 ? 'Faces' : 'Face';

	return (
		boundingBox && (
			<div style={display} className="stats">
				<h1>Found {`${boundingBox.length} ${strFace}`} </h1>
			</div>
		)
	);
};

export default Stats;
