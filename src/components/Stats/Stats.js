import React from 'react';

const Stats = ({ boundingBox }) => {
	const strFace = boundingBox && boundingBox.length > 1 ? 'Faces' : 'Face';
	return (
		boundingBox && (
			<div className="stats">
				<h1>Found {`${boundingBox.length} ${strFace}`} </h1>
			</div>
		)
	);
};

export default Stats;
