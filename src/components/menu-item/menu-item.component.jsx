import React from 'react';
import './menu-item.style.scss';

export const MenuItem = ({ title, imageUrl, id, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div style={{ backgroundImage: `URL(${imageUrl})` }} className="background-image" />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
