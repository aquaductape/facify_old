import React from 'react';

const Stats = ({ display, boundingBox }) => {
	const strFace = boundingBox && boundingBox.length === 1 ? 'Face' : 'Faces';

	return (
		boundingBox && (
			<div style={display} className="stats">
				<p>Found {`${boundingBox.length} ${strFace}`} </p>
			</div>
		)
	);
};

export default Stats;
