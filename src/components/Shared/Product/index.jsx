import React, {useState} from "react";
import { Card, ImageContent, Overlay, CardImage, CardContent, Name, Description, Price, Button, Icons, IoPencil, IoColorWand, IoTrash } from "./style";
import logo from "../../../assets/images/imagem.png"
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";

export default function Product(props) {
    const handle = () =>{
        props.getId(props.id)
        props.modal(true)
    }
    if(props.type == 1){
        return (
            <Card>
                <ImageContent>
                    <Overlay></Overlay>
                    <CardImage>
                        <img src={props.imageUrl}></img>
                    </CardImage>
                    <Icons>
                        <Link to={`/products/update/${props.id}`}>
                            <IoColorWand />
                        </Link>
                        <IoTrash onClick={handle}/>
				    </Icons>
                </ImageContent>
    
                <CardContent>
                    <Name>{props.name}</Name>
                    <Description>{props.description}</Description>
                    <Price>{props.price}</Price>
                    <Button>Comprar</Button>
                </CardContent>
            </Card>
            
        );
    }else{
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
	
}