import React, { useState, useEffect } from "react";
import {
  Image,
  IconImageEmployee,
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
  Select,
  Option,
  InputDate,
  IconImageSale,
} from "../RegisterForm/style";
import EmployeeService from "../../../../services/employees";
import SalesService from "../../../../services/sales";
import ProductsService from "../../../../services/products";
import CustomerService from "../../../../services/customers";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function FormRegisterSale(props) {
  // Sales Section
  const [saleCustomerId, setSaleCustomerId] = useState("");
  const [saleProductId, setSaleProductId] = useState("");
  const [saleEmployeeId, setSaleEmployeeId] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [image, setImage] = useState("");

  const handleSubmitSale = async (evt) => {
    evt.preventDefault();

    try {
      const sale = await SalesService.add({
        productId: saleProductId,
        customerId: saleCustomerId,
        employeeId: saleEmployeeId,
        date: saleDate,
      });
      setRoute("/sales");
      setRedirectToDash(true);
      toast.success("Venda realizada com sucesso!");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

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

  //Customers
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
  }, []);
  // Get
  async function fetchCustomers() {
    const response = await CustomerService.getAll();
    if (response.data.length >= 1) {
      setCustomers(response.data);
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

  //Modal
  const [modal, setModal] = useState(false);

  // Redirect
  const [redirectToDash, setRedirectToDash] = useState(false);
  const [route, setRoute] = useState("");
  // Error form
  const [error, setError] = useState(false);
  console.log(saleDate);
  let dt = new Date();
  console.log(dt.toLocaleString());
  if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
  return (
    <Context>
      <Image>{image ? <img src={image}></img> : <IconImageSale />}</Image>
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
                  value={""}
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
          <InputGroup>
            <InputBox>
              <Label>Produtos</Label>
              <Select
                onChange={(e) => {
                  setSaleProductId(e.target.value);
                }}
              >
                <Option value="">Escolha</Option>
                {products.length > 0 &&
                  products.map((s, key) => (
                    <Option key={key} value={s.id}>
                      {s.name}
                    </Option>
                  ))}
              </Select>
            </InputBox>

            <InputBox>
              <Label>Funcionários</Label>
              <Select
                onChange={(e) => {
                  setSaleEmployeeId(e.target.value);
                }}
              >
                <Option value="">Escolha</Option>
                {employees.length > 0 &&
                  employees.map((s, key) => (
                    <Option key={key} value={s.id}>
                      {s.name}
                    </Option>
                  ))}
              </Select>
            </InputBox>

            <InputBox>
              <Label>Clientes</Label>
              <Select
                onChange={(e) => {
                  setSaleCustomerId(e.target.value);
                }}
              >
                <Option value="">Escolha</Option>
                {customers.length > 0 &&
                  customers.map((s, key) => (
                    <Option key={key} value={s.id}>
                      {s.name}
                    </Option>
                  ))}
              </Select>
            </InputBox>

            <InputBox>
              <Label>Data de Nascimento</Label>
              <InputDate
                type="datetime-local"
                placeholder=""
                value={saleDate}
                required
                onChange={(e) => {
                  setSaleDate(e.target.value);
                }}
              />
            </InputBox>
          </InputGroup>
          <ContextButton>
            <Button
              onClick={(evt) => {
                handleSubmitSale(evt);
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

export default FormRegisterSale;
