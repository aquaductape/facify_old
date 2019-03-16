import React from 'react';

const BoundingInfo = ({ boxId, onCanvas }) => {
	return (
		<div>
			<canvas ref={(canvas) => (canvas ? onCanvas(canvas, boxId) : null)} />
		</div>
	);
};

export default BoundingInfo;
