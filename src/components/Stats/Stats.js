import React from 'react';

const Stats = ({ loading, boundingBox }) => {
	const strFace = boundingBox && boundingBox.length === 1 ? 'Face' : 'Faces';

	let render =
		!loading && boundingBox ? (
			<div className="stats">
				<p>Found {`${boundingBox.length} ${strFace}`} </p>
			</div>
		) : null;
	return render;
};

export default Stats;
