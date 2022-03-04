import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Item from "./Item";

const Menu = ({ handleAdd, checkingOut }) => {
	const [menuItems, setMenuItems] = useState([]);

	const toggleCheckboxOption = (e) => {
		console.log(e)
	}

	useEffect(() => {
		fetch("/menu")
			.then((res) => res.json())
			.then((data = []) => setMenuItems(data));
	}, [setMenuItems]);

	return (
		<Col sm={8}>
			<Row>
				<h4>Menu</h4>
			</Row>
			{menuItems.map((menuItem) => (
				<Item key={menuItem.id} item={menuItem} onClick={handleAdd} disabled={checkingOut} toggleCheckboxOption={toggleCheckboxOption} />
			))}
		</Col>
	);
};

export default Menu;
