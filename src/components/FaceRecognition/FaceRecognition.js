import React from 'react';
import './FaceRecognition.css';
import Error400 from '../Error/Error400';
import ImageDemo from './ImagePanel/ImageDemo';
import InfoDemo from './ImagePanel/InfoDemo';

const FaceRecognition = ({ display, imageStatus, imageUrl, boundingBox, onMainImageLoad, onCanvas }) => {
	debugger;
	display = display.display === 'none' ? display : { display: 'grid' };
	let render;
	if (imageStatus === null) {
		render = null;
	} else if (imageStatus !== 400) {
		render = (
			<div style={display} className="image-panel">
				<ImageDemo imageUrl={imageUrl} boundingBox={boundingBox} onMainImageLoad={onMainImageLoad} />
				<InfoDemo boundingBox={boundingBox} onCanvas={onCanvas} />
			</div>
		);
	} else {
		render = <Error400 />;
	}
	return render;
};

export default FaceRecognition;
