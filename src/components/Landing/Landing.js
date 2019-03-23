import React from 'react';
import './Landing.css';
import face from '../../img/face_detect.svg';
import logo from '../../img/logo.svg';

const Landing = ({ loading, imageStatusOk, boundingBox, isWebCamOn }) => {
	const render = !loading && !boundingBox && !isWebCamOn && imageStatusOk !== 400;
	return render ? (
		<header>
			<div className="header-title--container">
				<div className="header-title">
					<div className="header-title--logo">
						<img src={logo} alt="Facify Logo" />
					</div>
					<h1>
						Find <span>Faces</span>
					</h1>
				</div>
			</div>
			<div className="header-image">
				<img src={face} alt="Laptop featuring human face art graphic" />
			</div>
			<div className="header-text">
				<p>By using Computer Vision AI, you'll receive</p>
				<ul>
					<li>Crop Faces</li>
					<li>
						Fixed{' '}
						<strong>
							<a
								href="https://www.howtogeek.com/254830/why-your-photos-dont-always-appear-correctly-rotated/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Exif
							</a>
						</strong>{' '}
						Orientation
					</li>
				</ul>
			</div>
		</header>
	) : null;
};

export default Landing;
