import React, { useState, useEffect } from "react";
import {
  Container,
  Context,
  Top,
  Bottom,
  Layout,
  CardContent,
  Image,
  Logo,
  NameSubject,
  Name,
  Buttons,
  HireMe,
  Social,
  Title,
  UserDetails,
  InputBox,
  InputName,
  TextInput,
  Left,
  Right,
  ContainerInput,
  Controller,
  IoMail,
  IoLock,
  IoPerson,
  IoSearc,
  ModalImage,
  Input,
  Exit,
  IoBuild2,
  HireMe2,
  IoBuild,
  Select,
  Option,
  GenderInputs,
  GenderTitle,
  H6,
  GenderGroup,
  GenderInput,
  InputRadio,
  Label,
  GenderController,
} from "../UpdateForm/style";
import EmployeeService from "../../../../services/employees";
import ProductsService from "../../../../services/products";
import SalesService from "../../../../services/sales";
//import CustomersService from "../../../../services/customers";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function FormUpSale(props) {
  //Others
  let { id } = useParams();

  //Modal
  const [modal, setModal] = useState(false);

  // Redirect
  const [redirectToDash, setRedirectToDash] = useState(false);
  const [route, setRoute] = useState("");
  // Error form
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  function HandlerOpen() {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  // Employee Section
  const [saleCustomerId, setSaleCustomerId] = useState("");
  const [saleProductId, setSaleProductId] = useState("");
  const [saleEmployeeId, setSaleEmployeeId] = useState("");
  const [saleProduct, setSaleProduct] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchSales(id);
  }, []);

  async function fetchSales(id) {
    const response = await SalesService.getId(id);
    setSaleProduct(response.data.product.name);
    setImage(response.data.product.imageUrl);
    setSaleCustomerId(response.data.customerId);
    setSaleProductId(response.data.productId);
    setSaleEmployeeId(response.data.employeeId);
    setSaleDate(response.data.date);
  }

  //Employees
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);
  // Get
  async function fetchEmployees() {
    const response = await EmployeeService.getAll();
    if (response.data.length >= 1) {
      setEmployees(response.data);
    }
  }

  //Products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  // Get
  async function fetchProducts() {
    const response = await ProductsService.getAll();
    if (response.data.length >= 1) {
      setProducts(response.data);
    }
  }

  //Customers
  //   const [customers, setCustomers] = useState([]);
  //   useEffect(() => {
  //     fetchCustomers();
  //   }, []);
  //   // Get
  //   async function fetchCustomers() {
  //     const response = await CustomersService.getAll();
  //     if (response.data.length >= 1) {
  //       setCustomers(response.data);
  //     }
  //   }

  const handleSubmitSale = async (evt) => {
    // evt.preventDefault();
    try {
      const sales = await SalesService.update(id, {
        productId: saleProductId,
        customerId: saleCustomerId,
        employeeId: saleEmployeeId,
        date: saleDate,
      });
      console.log(sales);
      setRoute("/sales");
      setRedirectToDash(true);
      toast.success("Venda alterada com sucesso!");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  //   console.log(saleProductId);
  //   console.log(saleCustomerId);
  //   console.log(saleEmployeeId);
  //   console.log(saleDate);
  // Produtc final
  if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
  return (
    <Container>
      <Context>
        <Layout style={!open ? { background: "none" } : {}}>
          <Top>
            <CardContent>
              <Image>
                <Logo src={image} />
                <IoSearc
                  onClick={() => {
                    setModal(true);
                  }}
                ></IoSearc>
              </Image>
              {modal ? (
                <ModalImage>
                  <InputBox>
                    <Input
                      type="text"
                      placeholder=""
                      value={Image}
                      //   onChange={(e) => {
                      //     setImage(e.target.value);
                      //   }}
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
              <Social>
                <IoBuild />
              </Social>
              <NameSubject>
                <Name style={open ? { display: "none" } : {}}>
                  {open ? saleProduct : saleProduct}
                </Name>
              </NameSubject>
              <Buttons
                onClick={HandlerOpen}
                style={open ? { display: "none" } : {}}
              >
                <HireMe2>Editar</HireMe2>
              </Buttons>
            </CardContent>
          </Top>
          <Bottom style={!open ? { display: "none" } : {}}>
            <Title>Editar Venda</Title>
            <UserDetails>
              <Left>
                <Controller>
                  <span>Produto</span>
                  <ContainerInput>
                    <Select
                      onChange={(e) => {
                        setSaleProductId(e.target.value);
                      }}
                    >
                      {products.length > 0 &&
                        products.map((s, key) => {
                          if (s.id == saleProductId) {
                            return (
                              <Option key={key} value={s.id} selected>
                                {s.name}
                              </Option>
                            );
                          }
                          return (
                            <Option key={key} value={s.id}>
                              {s.name}
                            </Option>
                          );
                        })}
                    </Select>
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
                <Controller>
                  <span>Clientes</span>
                  <ContainerInput>
                    <Select
                      onChange={(e) => {
                        setSaleCustomerId(e.target.value);
                      }}
                    >
                      {employees.length > 0 &&
                        employees.map((s, key) => {
                          if (s.id == saleCustomerId) {
                            return (
                              <Option key={key} value={s.id} selected>
                                {s.name}
                              </Option>
                            );
                          }
                          return (
                            <Option key={key} value={s.id}>
                              {s.name}
                            </Option>
                          );
                        })}
                    </Select>
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
              </Left>
              <Right>
                <Controller>
                  <span>Funcionário</span>
                  <ContainerInput>
                    <Select
                      onChange={(e) => {
                        setSaleEmployeeId(e.target.value);
                      }}
                    >
                      {employees.length > 0 &&
                        employees.map((s, key) => {
                          if (s.id == saleEmployeeId) {
                            return (
                              <Option key={key} value={s.id} selected>
                                {s.name}
                              </Option>
                            );
                          }
                          return (
                            <Option key={key} value={s.id}>
                              {s.name}
                            </Option>
                          );
                        })}
                    </Select>
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
              </Right>
            </UserDetails>
            <Buttons onClick={HandlerOpen} style={open ? {} : {}}>
              <HireMe
                onClick={() => {
                  HandlerOpen();
                  handleSubmitSale();
                }}
              >
                Pronto
              </HireMe>
            </Buttons>
          </Bottom>
        </Layout>
      </Context>
    </Container>
  );
}

export default FormUpSale;
