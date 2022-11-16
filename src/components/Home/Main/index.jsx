import React from "react";
import { Container, Section, Circle, MainText, Title, Tastes, About, Button, MainImg, Image, RightBG, Control, Social, IoCart } from "./style";
import logo from "../../../assets/images/imagem.png"

export default function Main() {
	return (
		// <Container>
		// 	<Section>
        //         <Circle></Circle>
        //         <MainText>
        //             {/* <img src="" alt="hamburguer"></img> */}
        //             <Title>Bem vindo ao SambaBurguer</Title>
        //             <Tastes>Diferentes sabores com diferentes hamburgueres!</Tastes>
        //             <About>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et, laboriosam laborum eius rem cupiditate eos commodi rerum ut nobis accusantium. 
        //                 </About>
        //             <Button>Escolha agora</Button>
        //         </MainText>
        //         <MainImg>
        //             <img src={logo} alt="hamburguer"></img>
        //         </MainImg>
        //     </Section>
        // </Container>
        <Container>
            <Section>
                <MainText>
                    <Control>
                        <Title>Bem vindo ao SambaBurguer</Title>
                        <Tastes>Diferentes sabores!</Tastes>
                        <About>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et, laboriosam laborum eius rem cupiditate eos commodi rerum ut nobis accusantium. </About>
                        <Button>Escolha agora</Button>
                    </Control>
                </MainText>
                <MainImg>
                    <Image>
                        <img src={logo} alt="hamburguer"></img>
                    </Image>
                    <RightBG/>
                    <Social>
                        <IoCart/>
                        <IoCart/>
                        <IoCart/>
                    </Social>
                </MainImg>
            </Section>
        </Container>
		
	);
}
