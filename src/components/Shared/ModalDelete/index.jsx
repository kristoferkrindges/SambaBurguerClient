import React, { useState, useEffect } from "react";
import {
  Dark,
  Context,
  Container,
  ModalBox,
  Icon,
  Title,
  SubTitle,
  Buttons,
  Button,
  NameSubject,
  Image,
  Buttoned,
} from "./style";

export default function ModalDelete(props) {
  const handleNot = () => {
    props.modal(false);
  };

  const handleYes = () => {
    console.log("yes");
    props.yes();
  };

  return (
    <Dark>
      <Context>
        <Container>
          <ModalBox>
            <Image>
              <Icon></Icon>
            </Image>
            <NameSubject>
              <Title>Aviso</Title>
              <SubTitle>Deseja excluir?</SubTitle>
            </NameSubject>
            <Buttons>
              <Buttoned onClick={handleNot}>Não</Buttoned>
              <Button onClick={handleYes}>Sim</Button>
            </Buttons>
          </ModalBox>
        </Container>
      </Context>
    </Dark>
  );
}
