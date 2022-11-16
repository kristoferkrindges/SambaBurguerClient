import React from "react";
import { Container, Context, Title, Content, Article, SubTitle, Write, Button, ImageSection, Icon, } from "./style";

export default function About() {
	return (

        <Container>
            <Context>
                <Title>Sobre Nós</Title>
            </Context>
            <Content>
                <Article>
                    <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate quia</SubTitle>
                    <Write>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate quia, enim voluptate quos ipsum aspernatur distinctio reiciendis voluptatum 
                        !</Write>
                    <Button>Franquias</Button>
                </Article>
                <ImageSection>
                    <Icon></Icon>
                </ImageSection>
            </Content>
        </Container>
		
	);
}
