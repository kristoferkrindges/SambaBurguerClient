import React from "react";
import {
	Container,
	Card,
	Image,
	NameProfession,
	Name,
	Button,
    IoCart
} from "./style";

function Sale(props) {
	return (
		<Container>
			<Card>
				<Image>
					<IoCart/>
				</Image>
				<NameProfession>
					<Name>Área de venda</Name>
					<Button>Vender</Button>
				</NameProfession>
			</Card>
		</Container>
	);
}

export default Sale;
