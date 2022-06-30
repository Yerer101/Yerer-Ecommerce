import React from 'react';
import ItemList from '../assets/ItemList';
const ShopingList = () =>{
	console.log(ItemList)
	return (
		<div>
			<ul>
			{
				ItemList.map((item, i)=>{
				let templet = ` 
					<li>
						<a href=""><span>+</span></a>
						<ul>
							<li>${item[0]}</li>
							<li>${item[1]}</li>
						</ul>
					</li>
					`
				return templet
				})
			}
			</ul>
		</div>
		)
}


export default ShopingList;


			// <ul >
	  //           <li > 
	  //           <a>Electronics <span class="caret"></span></a>
		 //            <ul>
		 //              <li>Smart Phone</li>
		 //              <li>Laptop </li>
		 //              <li>Desktop </li>
		 //              <li>Tablet </li>
		 //              <li>Smart TV </li>
		 //              <li>Digital Camera </li>
		 //              <li>Hard Drive </li>
		 //              <li>Flash Drive & Memory Card </li>
		 //              <li>Headset & Headphone</li>
		 //              <li>Electronics Accessories</li>
		 //            </ul>
	  //           </li>
   //        	</ul>