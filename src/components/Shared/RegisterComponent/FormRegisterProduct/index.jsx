import React, { useState, useEffect } from "react";
import {
  Image,
  IconImageProduct,
  ContentForm,
  Form,
  FormHeader,
  Title,
  H1,
  IconButton,
  InputGroup,
  InputBox,
  Label,
  Input,
  ContextButton,
  Button,
  IoSearc,
  Context,
  ModalImage,
  Exit,
} from "../RegisterForm/style";
import ProductService from "../../../../services/products";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function FormRegisterProduct(props) {
  // Prudct Section
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");

  //Modal
  const [modal, setModal] = useState(false);

  // Redirect
  const [redirectToDash, setRedirectToDash] = useState(false);
  const [route, setRoute] = useState("");
  // Error form
  const [error, setError] = useState(false);

  //Product
  const handleSubmitProduct = async (evt) => {
    evt.preventDefault();

    try {
      const product = await ProductService.add({
        name: productName,
        price: productPrice,
        description: productDescription,
        imageUrl: productImage,
      });
      setRoute("/products");
      setRedirectToDash(true);
      toast.success("Produto cadastrado com sucesso!");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
  return (
    <Context>
      <Image>
        {productImage ? <img src={productImage}></img> : <IconImageProduct />}
      </Image>
      <ContentForm>
        <Form>
          <FormHeader>
            <Title>
              <H1>Cadastro</H1>
            </Title>
            <IconButton>
              <IoSearc
                onClick={() => {
                  setModal(true);
                }}
              ></IoSearc>
            </IconButton>
          </FormHeader>
          {modal ? (
            <ModalImage>
              <InputBox>
                <Input
                  type="text"
                  placeholder=""
                  value={productImage}
                  onChange={(e) => {
                    setProductImage(e.target.value);
                  }}
                />
              </InputBox>
              <Exit
                onClick={() => {
                  setModal(false);
                }}
              >
                Pronto
              </Exit>
            </ModalImage>
          ) : (
            <></>
          )}
          <InputGroup>
            <InputBox>
              <Label>Nome</Label>
              <Input
                type="text"
                placeholder=""
                value={productName}
                required
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
            </InputBox>

            <InputBox>
              <Label>Preço</Label>
              <Input
                type="number"
                placeholder=""
                value={productPrice}
                required
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
            </InputBox>

            <InputBox>
              <Label>Descrição</Label>
              <Input
                type="text"
                placeholder=""
                value={productDescription}
                required
                onChange={(e) => {
                  setProductDescription(e.target.value);
                }}
              />
            </InputBox>
          </InputGroup>
          <ContextButton>
            <Button
              onClick={(evt) => {
                handleSubmitProduct(evt);
              }}
            >
              Cadastrar
            </Button>
          </ContextButton>
          {/* {error && <h1>Error</h1>} */}
        </Form>
      </ContentForm>
    </Context>
  );
}

export default FormRegisterProduct;
