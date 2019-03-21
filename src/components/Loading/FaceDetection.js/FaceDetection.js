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
			<div className="loading-description">
				<h2>Locating Faces</h2>
				<p>Waiting for Clarifai's Server to read your Image</p>
			</div>
		</div>
	);
};

export default FaceDetection;
