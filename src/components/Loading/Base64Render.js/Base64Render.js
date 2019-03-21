import React from 'react';

const Base64Render = () => {
	return (
		<div>
			<div className="container-loader">
				<div className="fulfilling-square-spinner">
					<div className="spinner-inner" />
				</div>
			</div>
			<div className="loading-description">
				<h2>Creating Base64 Image URL</h2>
				<p>Applying rotation to compensate for EXIF orientation when needed</p>
			</div>
		</div>
	);
};

export default Base64Render;
