import React from 'react';
import BoundingBox from './Bounding/BoundingBox';

const ImageDemo = ({ imageUrl, onMainImageLoad, boundingBox, onToggleBoundingBoxHighlight }) => {
	const description =
		boundingBox.length === 0
			? 'image with no faces'
			: boundingBox.length === 1 ? 'image with face' : 'image with faces';

	return (
		<div className="container">
			<div className="container--image-demo">
				<img
					onLoad={(e) => onMainImageLoad(e, boundingBox)}
					className="image-demo"
					src={imageUrl}
					alt={description}
				/>
				{boundingBox.map(({ region_info }) => {
					const boundingBox = region_info.bounding_box;
					const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
					return (
						<BoundingBox
							key={id}
							boxId={id}
							boundingBox={region_info.bounding_box}
							onToggleBoundingBoxHighlight={onToggleBoundingBoxHighlight}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ImageDemo;
