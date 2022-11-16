import React from "react";
import { Card, ImageContent, Overlay, CardImage, CardContent, Name, Description, Price, Button } from "./style";
import logo from "../../../assets/images/imagem.png"

export default function Product(props) {
	return (
		<Card>
            <ImageContent>
                <Overlay></Overlay>
                <CardImage>
                    <img src={props.imageUrl}></img>
                </CardImage>
            </ImageContent>

            <CardContent>
                <Name>{props.name}</Name>
                <Description>{props.description}</Description>
                <Price>{props.price}</Price>
                <Button>Comprar</Button>
            </CardContent>
        </Card>
		
	);
}