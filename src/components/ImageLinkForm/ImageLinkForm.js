import React from 'react';

const ImageLinkForm = ({ inputValue, onInputChange, onImageUpload, onButtonSubmit }) => {
	return (
		<div>
			<div>
				<div className="input-group">
					<div className="multifile-upload-group">
						<input
							onChange={onImageUpload}
							type="file"
							name="file"
							id="file"
							className="input-file--hidden"
						/>
						<label className="label-input-file" htmlFor="file">
							Upload Image
						</label>
						<input
							autoFocus
							spellCheck="false"
							value={inputValue}
							onChange={onInputChange}
							className="input-text"
							type="text"
							placeholder="Or type URL..."
						/>
					</div>
					<button onClick={onButtonSubmit} className="input-button">
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
