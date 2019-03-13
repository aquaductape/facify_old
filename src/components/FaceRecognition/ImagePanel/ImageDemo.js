import React from 'react';
import BoundingBox from './Bounding/BoundingBox';

const ImageDemo = ({ imageUrl, onMainImageLoad, boundingBox }) => {
	return (
		<div className="container">
			<img onLoad={(e) => onMainImageLoad(e, boundingBox)} className="image-demo" src={imageUrl} alt="" />
			{boundingBox.map(({ region_info }) => {
				const boundingBox = region_info.bounding_box;
				const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
				return <BoundingBox key={id} boundingBox={region_info.bounding_box} />;
			})}
		</div>
	);
};

export default ImageDemo;
