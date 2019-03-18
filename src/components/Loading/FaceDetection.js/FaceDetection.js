import React from 'react';

const FaceDetection = () => {
	return (
		<div>
			<div className="container-loader">
				<div className="swapping-squares-spinner">
					<div className="square" />
					<div className="square" />
					<div className="square" />
					<div className="square" />
				</div>
			</div>
			<h6>Locating Faces</h6>
		</div>
	);
};

export default FaceDetection;
