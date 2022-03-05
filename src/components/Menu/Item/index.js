import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Styled from "./styles";
import { Form } from "react-bootstrap";

const Item = ({ item, onClick, disabled }) => {

	return (
		<Styled.MenuItem>
			<Col>
				<Styled.Name>{item.name}</Styled.Name>
				<Styled.Description>{item.description}</Styled.Description>
				{item.customizations?.map((customization) => <Styled.Customization key={customization.customizationDesc}>{customization.customizationDesc}
				{customization.customizationOptions?.map((option) => 
					<Form.Check>
					</Form.Check>)}
				</Styled.Customization>)}
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
