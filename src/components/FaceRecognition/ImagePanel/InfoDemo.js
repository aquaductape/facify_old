import React from 'react';
import BoundingInfo from './Bounding/BoundingInfo';

const InfoDemo = ({ imageUrl, boundingBox, onCanvas }) => {
	return (
		<div className="info-demo">
			{boundingBox.map(({ region_info }, i) => {
				const boundingBox = region_info.bounding_box;
				const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
				return (
					<BoundingInfo
						key={id}
						boxId={id}
						imageUrl={imageUrl}
						boundingBox={region_info.bounding_box}
						onCanvas={onCanvas}
					/>
				);
			})}
		</div>
	);
};

export default InfoDemo;
