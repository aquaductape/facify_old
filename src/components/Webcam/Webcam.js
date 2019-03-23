import React from 'react';
import './Webcam.css';
import CaptureButton from './CaptureButton/CaptureButton';

const Webcam = ({ startWebCam, isWebCamOn, onCaptureButtonClick }) => {
	isWebCamOn = !!isWebCamOn;
	return isWebCamOn ? (
		<div>
			<div className="video-container">
				<video ref={startWebCam} id="player" autoPlay />
			</div>
			<canvas style={{ display: 'none' }} id="canvas-webcam" width="320" height="240" />
			<CaptureButton onCaptureButtonClick={onCaptureButtonClick} />
		</div>
	) : null;
};

export default Webcam;
