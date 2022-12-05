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

import Sidebar from "../Shared/Sidebar";
import SalesService from "../../services/sales";
import SearchBar from "../Shared/SearchBar";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import ModalDelete from "../Shared/ModalDelete";
import Sale from "../Shared/Sale";

export default function Sales(props) {
  const [id, setId] = useState("");
  // children
  const [result, setResult] = useState("");

  //Modal
  const [modal, setModal] = useState(false);

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
  const [sales, setSales] = useState([]);
  // Get
  useEffect(() => {
    fetchSales();
  }, []);
  async function fetchSales() {
    const response = await SalesService.getAll();
    if (response.data.length >= 1) {
      setSales(response.data);
    }
  }
  console.log(sales);
  // Delete
  async function DeleteSales() {
    const response = await SalesService.delete(id);
    setModal(false);
    const r = sales.filter((item) => item.id !== id);
    setSales(r);
  }

  //Carrousel
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <Layout>
      <Sidebar name="Desconhecido" total={true} />
      <Option>
        <Content>
          <Title>
            <span>Vendas</span>
          </Title>
          <BtnContent>
            <Link to="/sales/register">
              <Button>Cadastrar</Button>
            </Link>
          </BtnContent>
          <Cont>
            <SearchBar
              placeholder="Procure por vendas"
              data={sales}
              updateResult={updateResult}
            />
          </Cont>
          {modal ? (
            <ModalDelete modal={handleModal} yes={DeleteSales} />
          ) : (
            <></>
          )}
          <Carrousel breakPoints={breakPoints}>
            {sales.length > 0 &&
              sales
                .filter((value) => {
                  if (result === "") {
                    return value;
                  } else if (
                    value.product.name
                      .toLowerCase()
                      .includes(result.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((value, key) => (
                  <Sale
                    key={key}
                    id={value.id}
                    productId={value.productId}
                    product={value.product}
                    constomerId={value.customerId}
                    customer={value.customer}
                    employeeId={value.employeeId}
                    employee={value.employee}
                    modal={handleModal}
                    getId={handleId}
                  />
                ))}
          </Carrousel>
        </Content>
      </Option>
    </Layout>
  );
}
