import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Styled from "./styles";

const Item = ({ item, onClick, disabled }) => {
	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>
				{item.customizations?.map((customization) => {
					<Styled.Name>{customization.customizationDesc}</Styled.Name>;
				})}
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
