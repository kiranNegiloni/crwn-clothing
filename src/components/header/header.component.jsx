import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = () => {
	return (
		<div className="header">
			<Link className="logo-conatiner" to="/">
				<Logo className="logo" />
			</Link>

			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
			</div>
		</div>
	);
};
