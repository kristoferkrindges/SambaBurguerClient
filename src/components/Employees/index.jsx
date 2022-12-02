import React, { useState, useEffect } from "react";
import {
  Layout,
  Content,
  Option,
  Title,
  Cont,
  BtnContent,
  Button,
} from "./style";
import Employee from "../Shared/Employee";
import Sidebar from "../Shared/Sidebar";
import EmployeeService from "../../services/employees";
import SearchBar from "../Shared/SearchBar";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import ModalDelete from "../Shared/ModalDelete";

export default function Employees(props) {
  const [employees, setEmployees] = useState([]);

  const [id, setId] = useState("");
  // children
  const [result, setResult] = useState("");

  //Modal
  const [modal, setModal] = useState(false);

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
  console.log(employees);
  // Delete
  async function DeleteEmployees() {
    const response = await EmployeeService.delete(id);
    setModal(false);
    const r = employees.filter((item) => item.id !== id);
    setEmployees(r);
  }

  //Pegar dado do SearchBar componente filho
  const updateResult = (r) => {
    setResult(r);
  };
  const handleModal = (r) => {
    setModal(r);
  };
  const handleId = (r) => {
    setId(r);
    console.log(r);
  };
  //Carrousel
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <Layout>
      <Sidebar name="Desconhecido" total={true} />
      <Option>
        <Content>
          <Title>
            <span>Funcionários</span>
          </Title>
          <BtnContent>
            <Link to="/employees/register">
              <Button>Cadastrar</Button>
            </Link>
          </BtnContent>
          <Cont>
            <SearchBar
              placeholder="Procure por funcionários"
              data={employees}
              updateResult={updateResult}
            />
          </Cont>
          {modal ? (
            <ModalDelete modal={handleModal} yes={DeleteEmployees} />
          ) : (
            <></>
          )}
          <Carrousel breakPoints={breakPoints}>
            {employees.length > 0 &&
              employees
                .filter((value) => {
                  if (result === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(result.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((value, key) => (
                  <Employee
                    key={key}
                    id={value.id}
                    shopId={value.shopId}
                    imageUrl={value.imageUrl}
                    name={value.name}
                    gender={value.gender}
                    cpf={value.cpf}
                    email={value.email}
                    birthDate={value.birthdate}
                    address={value.address}
                    func={value.type}
                    modal={handleModal}
                    getId={handleId}
                    stars={5}
                  />
                ))}
          </Carrousel>
        </Content>
      </Option>
    </Layout>
  );
}

// key={key}
// id={value.id}
// shopId={value.shopId}
// imageUrl={value.imageUrl}
// name={value.name}
// gender={value.gender}
// cpf={value.cpf}
// email={value.email}
// birthDate={value.birthdate}
// address={value.address}
// func={value.address}
// modal={handleModal}
// getId={handleId}
// stars={5}
