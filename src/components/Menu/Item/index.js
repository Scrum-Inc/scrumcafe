import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Styled from "./styles";

const Item = ({ item, onClick, disabled }) => {
	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>
				{item.options.map((itemOption) => (
					<Form.Check.Input id={itemOption} label={itemOption.label} />
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
