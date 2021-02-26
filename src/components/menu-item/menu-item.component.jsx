import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, id, size, history, linkUrl, match }) => {
	return (
		<div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
			<div style={{ backgroundImage: `URL(${imageUrl})` }} className="background-image" />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
