import React from 'react';
import { BrowserView, isBrowser } from 'react-device-detect';

let displayMultifileUploadGroup = '';
let displayInputGroup = '';
if (isBrowser) {
	displayMultifileUploadGroup = 'multifile-upload-group--browser-view';
	displayInputGroup = 'input-group--browser-view';
}

const ImageLinkForm = ({
	inputValue,
	inputPlaceHolder,
	onInputChange,
	onImageUpload,
	onButtonSubmit,
	onWebCamButtonClick,
	inputRef
}) => {
	let basicPlaceHolder = '';
	if (inputPlaceHolder === 'Or type URL...') {
		basicPlaceHolder = 'basic-placeholder';
	}
	return (
		<div>
			<div>
				<div className={`input-group ${displayInputGroup}`}>
					<div className={`multifile-upload-group ${displayMultifileUploadGroup}`}>
						<BrowserView>
							<button onClick={onWebCamButtonClick} className="input-button--webcam">
								WebCam
							</button>
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
							ref={inputRef}
							autoFocus
							spellCheck="false"
							value={inputValue}
							onChange={onInputChange}
							className={`input-text ${basicPlaceHolder}`}
							type="text"
							placeholder={inputPlaceHolder}
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
