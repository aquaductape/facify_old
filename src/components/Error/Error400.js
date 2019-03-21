import React from 'react';

const Error400 = ({ display }) => {
	display = display.display === 'none' ? display : { display: 'block' };
	return (
		<div style={display} className="error-message">
			Oops! Something went wrong :( Perhapes the url is incorrect or your image is too large...
		</div>
	);
};

export default Error400;
