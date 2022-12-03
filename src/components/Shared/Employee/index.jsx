import React, { useState, useEffect } from "react";
import {
  Container,
  CardContent,
  Image,
  Logo,
  NameSubject,
  Name,
  Subject,
  SubjectUl,
  Li,
  Rating,
  Buttons,
  HireMe,
  StarIcon1,
  StarIcon2,
  IoTrash,
  IoColorWand,
  Icons,
  IoBasket,
  Email,
} from "./style";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";
import Shop from "../Shop";
import ShopsService from "../../../services/shops";

export default function Employee({
  id,
  stars,
  shopId,
  imageUrl,
  name,
  gender,
  cpf,
  email,
  birthDate,
  address,
  func,
  onClick,
  modal,
  getId,
}) {
  const number = 5 - stars;
  const star = Array.from({ length: stars }, (v, k) => k + 1);
  const star2 = Array.from({ length: number }, (v, k) => k + 1);
  // const eventClick = (event) => {
  // 	event.stopPropagation();
  // 	if (onClick) onClick(id);
  // };
  const handle = () => {
    getId(id);
    modal(true);
  };
  const [shopState, setShopState] = useState("");
  const [shopCep, setShopCep] = useState("");
  const [shopCity, setShopCity] = useState("");
  const [shopImage, setShopImage] = useState("");

  useEffect(() => {
    fetchShop(shopId);
  }, []);
  async function fetchShop(shopId) {
    const response = await ShopsService.getId(shopId);
    setShopState(response.data.state);
    setShopCep(response.data.cep);
    setShopCity(response.data.city);
    setShopImage(response.data.imageUrl);
  }
  // Modal
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <Shop
          closeModal={setOpenModal}
          type={"modal"}
          id={shopId}
          state={shopState}
          cep={shopCep}
          city={shopCity}
          image={shopImage}
          // getId=
          // modal=
        />
      )}
      <Container>
        <CardContent>
          <Image>
            <Logo src={imageUrl} />
          </Image>
          <Icons>
            <Link to={`/employees/update/${id}`}>
              <IoColorWand />
            </Link>
            <IoTrash onClick={handle} />
            <IoBasket
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </Icons>
          <NameSubject>
            <Name>{name}</Name>
            <Subject>
              <SubjectUl>
                <Li>{gender}</Li>
              </SubjectUl>
            </Subject>
            <Email>{email}</Email>
          </NameSubject>
          {/* eventClick */}
          <Buttons onClick={"eventClick"}>
            <HireMe>{func}</HireMe>
          </Buttons>
        </CardContent>
      </Container>
    </>
  );
}
