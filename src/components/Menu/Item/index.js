import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Styled from "./styles";

const Item = ({ item, onClick, disabled, toggleCheckboxOption }) => {
	

	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>
				{item.options.map((itemOption, index) => (
					
					<Styled.Description key={index}>
						<Form.Check 
							id={itemOption} 
							label={itemOption.label} 
							checked={itemOption.selected} 
							onChange={(e) => toggleCheckboxOption(e)}
						/>
					</Styled.Description>
				))}
			</Col>
			<Col sm="auto">
				<Button onClick={() => onClick(item)} disabled={disabled}>
					Add to cart
				</Button>
			</Col>
		</Styled.MenuItem>
	);
};

export default Item;
