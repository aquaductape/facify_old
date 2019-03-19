import React from 'react';
import './Loading.css';
import Base64Render from './Base64Render.js/Base64Render';
import FaceDetection from './FaceDetection.js/FaceDetection';

const Loading = ({ loading }) => {
	let render;
	switch (loading) {
		case 'yes:client':
			render = <Base64Render />;
			break;
		case 'yes:clarifai':
			render = <FaceDetection />;
			break;
		default:
			render = null;
	}
	return render;
};

export default Loading;
