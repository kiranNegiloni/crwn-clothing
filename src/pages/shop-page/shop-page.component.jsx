import React from 'react';
import './shop-page.style.scss';
import SHOP_DATA from './shop-page.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, title, ...otherProps }) => {
					return <CollectionPreview key={id} title={title} {...otherProps} />;
				})}
			</div>
		);
	}
}

export default ShopPage;
