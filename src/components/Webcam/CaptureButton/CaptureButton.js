import React from 'react';

const CaptureButton = ({ onCaptureButtonClick }) => {
	return (
		<div className="capture-button-container">
			<div onClick={onCaptureButtonClick} className="capture-button" />
		</div>
	);
};

export default CaptureButton;
