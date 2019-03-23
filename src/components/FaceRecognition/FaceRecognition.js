import React from 'react';
import './FaceRecognition.css';
import Error400 from '../Error/Error400';
import ImageDemo from './ImagePanel/ImageDemo';
import InfoDemo from './ImagePanel/InfoDemo';

const FaceRecognition = ({
	loading,
	areCroppedImagesLoading,
	imageStatusOk,
	imageUrl,
	boundingBox,
	onMainImageLoad,
	onCanvas,
	onToggleBoundingBoxHighlight
}) => {
	let render;

	if (imageStatusOk === null) {
		render = null;
	} else if (imageStatusOk === 400 && !loading) {
		render = <Error400 />;
	} else if (imageStatusOk !== 400 && !loading) {
		render = (
			<div className="image-panel">
				<ImageDemo
					imageUrl={imageUrl}
					boundingBox={boundingBox}
					onMainImageLoad={onMainImageLoad}
					onToggleBoundingBoxHighlight={onToggleBoundingBoxHighlight}
				/>
				<InfoDemo
					areCroppedImagesLoading={areCroppedImagesLoading}
					boundingBox={boundingBox}
					onCanvas={onCanvas}
					onToggleBoundingBoxHighlight={onToggleBoundingBoxHighlight}
				/>
			</div>
		);
	} else {
		render = null;
	}
	return render;
};

export default FaceRecognition;
