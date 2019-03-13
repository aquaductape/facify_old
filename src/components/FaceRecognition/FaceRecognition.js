import React from 'react';
import './FaceRecognition.css';
import Error400 from '../Error/Error400';
import ImageDemo from './ImagePanel/ImageDemo';
import InfoDemo from './ImagePanel/InfoDemo';

const FaceRecognition = ({ imageStatus, imageUrl, boundingBox, onMainImageLoad, onCanvas }) => {
	let render;
	if (imageStatus === null) {
		render = null;
	} else if (imageStatus !== 400) {
		render = (
			<div className="image-panel" style={{ maxWidth: '800px' }}>
				<ImageDemo imageUrl={imageUrl} boundingBox={boundingBox} onMainImageLoad={onMainImageLoad} />
				<InfoDemo imageUrl={imageUrl} boundingBox={boundingBox} onCanvas={onCanvas} />
			</div>
		);
	} else {
		render = <Error400 />;
	}
	return render;
};

export default FaceRecognition;
