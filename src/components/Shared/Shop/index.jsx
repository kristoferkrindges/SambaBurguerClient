import React from "react";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  Icons,
  IoColorWand,
  IoTrash,
  ModalWrapper2,
  Background2,
} from "./style";
import { Link } from "react-router-dom";

export default function Shop({
  type,
  closeModal,
  id,
  state,
  cep,
  city,
  image,
  getId,
  modal,
}) {
  const handle = () => {
    getId(id);
    modal(true);
  };

  if (type == "modal") {
    return (
      <>
        <Background2>
          <ModalWrapper2>
            <ModalImg src={image} alt="market" />
            <ModalContent>
              <h1>{city}</h1>
              <p>Estado: {state}</p>
              <p>Cep: {cep}</p>
              <button>Maps</button>
            </ModalContent>
            <CloseModalButton onClick={() => closeModal(false)} />
          </ModalWrapper2>
        </Background2>
      </>
    );
  } else {
    return (
      <>
        <Background>
          <ModalWrapper>
            <ModalImg src={image} alt="market" />
            <ModalContent>
              <Icons>
                <Link to={`/shops/update/${id}`}>
                  <IoColorWand />
                </Link>
                <IoTrash onClick={handle} />
              </Icons>
              <h1>{city}</h1>
              <p>{state}</p>
              <p>Cep: {cep}</p>
              <button>Maps</button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      </>
    );
  }
}
