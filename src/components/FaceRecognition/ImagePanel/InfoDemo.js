import React from 'react';
import BoundingInfo from './Bounding/BoundingInfo';
import Stats from '../../Stats/Stats';

const InfoDemo = ({ boundingBox, onCanvas, onToggleBoundingBoxHighlight }) => {
	let flexContent = null;
	if (boundingBox) {
		flexContent = boundingBox.length > 4 ? null : { justifyContent: 'left' };
	}
	return (
		<div style={flexContent} className="info-demo">
			<Stats className="stats--info-demo" display={null} boundingBox={boundingBox} />
			{boundingBox.map(({ region_info }) => {
				const boundingBox = region_info.bounding_box;
				const id = `${boundingBox.top_row}${boundingBox.left_col}${boundingBox.bottom_row}${boundingBox.right_col}`;
				return (
					<BoundingInfo
						key={id}
						boxId={id}
						onCanvas={onCanvas}
						onToggleBoundingBoxHighlight={onToggleBoundingBoxHighlight}
					/>
				);
			})}
		</div>
	);
};

export default InfoDemo;
