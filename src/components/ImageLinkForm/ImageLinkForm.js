import React from 'react';

const ImageLinkForm = ({ inputValue, onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<div>
				<div className="input-group">
					<input
						autoFocus
						spellCheck="false"
						value={inputValue}
						onChange={onInputChange}
						className="input-text"
						type=""
					/>
					<button onClick={onButtonSubmit} className="input-button">
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
