import React from 'react';
import { BrowserView, isBrowser } from 'react-device-detect';

let displayMultifileUploadGroup = '';
let displayInputGroup = '';
if (isBrowser) {
	displayMultifileUploadGroup = 'multifile-upload-group--browser-view';
	displayInputGroup = 'input-group--browser-view';
}

const ImageLinkForm = ({ inputValue, onInputChange, onImageUpload, onButtonSubmit }) => {
	return (
		<div>
			<div>
				<div className={`input-group ${displayInputGroup}`}>
					<div className={`multifile-upload-group ${displayMultifileUploadGroup}`}>
						<BrowserView>
							<button className="input-button--webcam">WebCam</button>
						</BrowserView>
						<input
							onChange={onImageUpload}
							type="file"
							name="file"
							id="file"
							className="input-file--hidden"
						/>
						<label className="label-input-file" htmlFor="file">
							Upload
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
