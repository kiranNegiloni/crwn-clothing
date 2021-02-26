import React from 'react';
import './collection-item.style.scss';

export const CollectionItem = ({ name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `URL(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
		</div>
	);
};
