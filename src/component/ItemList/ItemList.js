import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

class ItemList extends React.Component {
	render() {
		return (
			<div className="wrapper w3-hide-medium w3-hide-small">
				<Item name="Electronics" />
				<Item name="Clothing" />
				<Item name="Shoes" />
				<Item name="Watches" />
				<Item name="Bags" />
				<Item name="Cars" />
				<Item name="House For Sale" />
				<Item name="Furniture" />
			</div>
		);
	}
}

export default ItemList;