import React from 'react';

const BoundingInfo = ({ boxId, onCanvas, onToggleBoundingBoxHighlight }) => {
	return (
		<div
			id={'face-container-' + boxId}
			className="face-container"
			onMouseOver={onToggleBoundingBoxHighlight}
			onMouseOut={onToggleBoundingBoxHighlight}
		>
			<canvas
				style={{ display: 'none', height: '70px' }}
				ref={(canvas) => (canvas ? onCanvas(canvas, boxId) : null)}
			/>
		</div>
	);
};

export default BoundingInfo;
