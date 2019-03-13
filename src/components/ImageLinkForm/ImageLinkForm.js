import React from 'react';

const ImageLinkForm = ({ inputValue, onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p>{'Gotta scan'}</p>
			<div>
				<div className="">
					<input autoFocus value={inputValue} onChange={onInputChange} className="" type="" />
					<button onClick={onButtonSubmit} className="">
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
