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
import ShopsService from "../../../../services/shops";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function FormUpEmployee(props) {
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
  const [employeeName, setEmployeeName] = useState("");
  const [employeeShopId, setEmployeeShopId] = useState();
  const [employeeGender, setEmployeeGender] = useState("");
  const [employeeCpf, setEmployeeCpf] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeBirthDate, setEmployeeBirthDate] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeImage, setEmployeeImage] = useState("");
  const [employeeType, setEmployeeType] = useState("");

  useEffect(() => {
    fetchEmployee(id);
  }, []);

  async function fetchEmployee(id) {
    const response = await EmployeeService.getId(id);
    setEmployeeName(response.data.name);
    setEmployeeShopId(response.data.shopId);
    setEmployeeGender(response.data.gender);
    setEmployeeCpf(response.data.cpf);
    setEmployeeEmail(response.data.email);
    setEmployeeBirthDate(response.data.birthDate);
    setEmployeeAddress(response.data.address);
    setEmployeeImage(response.data.imageUrl);
    setEmployeeType(response.data.type);
  }

  //Shops
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetchShops();
  }, []);
  // Get
  async function fetchShops() {
    const response = await ShopsService.getAll();
    if (response.data.length >= 1) {
      setShops(response.data);
    }
  }

  const handleSubmitEmployee = async (evt) => {
    // evt.preventDefault();
    try {
      const Employee = await EmployeeService.update(id, {
        name: employeeName,
        shopId: employeeShopId,
        gender: employeeGender,
        cpf: employeeCpf,
        email: employeeEmail,
        birthDate: employeeBirthDate,
        address: employeeAddress,
        imageUrl: employeeImage,
        type: employeeType,
      });
      console.log(Employee);
      setRoute("/Employees");
      setRedirectToDash(true);
      toast.success("Funcionário alterado com sucesso!");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  // Produtc final
  if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
  return (
    <Container>
      <Context>
        <Layout style={!open ? { background: "none" } : {}}>
          <Top>
            <CardContent>
              <Image>
                <Logo src={employeeImage} />
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
                      value={employeeImage}
                      onChange={(e) => {
                        setEmployeeImage(e.target.value);
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
              <Social>
                <IoBuild />
              </Social>
              <NameSubject>
                <Name style={open ? { display: "none" } : {}}>
                  {open ? employeeName : employeeName}
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
            <Title>Editar Funcionário</Title>
            <UserDetails>
              <Left>
                <Controller>
                  <span>Nome</span>
                  <ContainerInput>
                    <InputName
                      type="text"
                      placeholder=""
                      value={employeeName}
                      onChange={(e) => {
                        setEmployeeName(e.target.value);
                      }}
                    />
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
                <Controller>
                  <span>Email</span>
                  <ContainerInput>
                    <InputName
                      type="email"
                      placeholder=""
                      value={employeeEmail}
                      onChange={(e) => {
                        setEmployeeEmail(e.target.value);
                      }}
                    />
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
                <Controller>
                  <span>Função</span>
                  <ContainerInput>
                    <Select
                      onChange={(e) => {
                        setEmployeeType(e.target.value);
                      }}
                    >
                      {employeeType == "Cozinheiro" ? (
                        <Option value="Cozinheiro" selected>
                          Cozinheiro
                        </Option>
                      ) : (
                        <Option value="Cozinheiro">Cozinheiro</Option>
                      )}
                      {employeeType == "Entregador" ? (
                        <Option value="Entregador" selected>
                          Entregador
                        </Option>
                      ) : (
                        <Option value="Entregador">Entregador</Option>
                      )}
                      {employeeType == "Garçom" ? (
                        <Option value="Garçom" selected>
                          Garçom
                        </Option>
                      ) : (
                        <Option value="Garçom">Garçom</Option>
                      )}
                      {employeeType == "Balconista" ? (
                        <Option value="Balconista" selected>
                          Balconista
                        </Option>
                      ) : (
                        <Option value="Balconista">Balconista</Option>
                      )}
                      {employeeType == "Marketing" ? (
                        <Option value="Marketing" selected>
                          Marketing
                        </Option>
                      ) : (
                        <Option value="Marketing">Marketing</Option>
                      )}
                      {employeeType == "Programador" ? (
                        <Option value="Programador" selected>
                          Programador
                        </Option>
                      ) : (
                        <Option value="Programador">Programador</Option>
                      )}
                      {employeeType == "Segurança" ? (
                        <Option value="Segurança" selected>
                          Segurança
                        </Option>
                      ) : (
                        <Option value="Segurança">Segurança</Option>
                      )}
                    </Select>
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
              </Left>
              <Right>
                <Controller>
                  <span>Endereço</span>
                  <ContainerInput>
                    <InputName
                      type="text"
                      placeholder=""
                      value={employeeAddress}
                      onChange={(e) => {
                        setEmployeeAddress(e.target.value);
                      }}
                    />
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
                <Controller>
                  <span>Cpf</span>
                  <ContainerInput>
                    <InputName
                      type="text"
                      placeholder=""
                      value={employeeCpf}
                      onChange={(e) => {
                        setEmployeeCpf(e.target.value);
                      }}
                    />
                    <TextInput>
                      <IoBuild2 />
                    </TextInput>
                  </ContainerInput>
                </Controller>
                <Controller>
                  <span>Franquia</span>
                  <ContainerInput>
                    <Select
                      onChange={(e) => {
                        setEmployeeShopId(e.target.value);
                      }}
                    >
                      {shops.length > 0 &&
                        shops.map((s, key) => {
                          if (s.id == employeeShopId) {
                            return (
                              <Option key={key} value={s.id} selected>
                                {s.city}
                              </Option>
                            );
                          }
                          return (
                            <Option key={key} value={s.id}>
                              {s.city}
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
            {/* <GenderController>
              <GenderInputs>
                <GenderTitle>
                  <H6>Gênero</H6>
                  <GenderGroup>
                    <GenderInput>
                      <InputRadio
                        type="radio"
                        placeholder=""
                        value={"Masculino"}
                        required
                        onChange={(e) => {
                          setEmployeeGender(e.target.value);
                        }}
                      />
                      <Label>Masculino</Label>
                    </GenderInput>

                    <GenderInput>
                      <InputRadio
                        type="radio"
                        placeholder=""
                        value={"Feminino"}
                        required
                        onChange={(e) => {
                          setEmployeeGender(e.target.value);
                        }}
                      />
                      <Label>Feminino</Label>
                    </GenderInput>
                    <GenderInput>
                      <InputRadio
                        type="radio"
                        placeholder=""
                        value={"Outros"}
                        required
                        onChange={(e) => {
                          setEmployeeGender(e.target.value);
                        }}
                      />
                      <Label>Outros</Label>
                    </GenderInput>
                  </GenderGroup>
                </GenderTitle>
              </GenderInputs>
            </GenderController> */}
            <Buttons onClick={HandlerOpen} style={open ? {} : {}}>
              <HireMe
                onClick={() => {
                  HandlerOpen();
                  handleSubmitEmployee();
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

export default FormUpEmployee;
