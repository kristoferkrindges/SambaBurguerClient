import React, { useState } from "react";
import { Card, Left, Right, Div, Buttons, HireMe } from "./style";
import logo from "../../../assets/images/imagem.png";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";

export default function Sale(props) {
  const handle = () => {
    props.getId(props.id);
    props.modal(true);
  };
  let controll = true;

  const [click, setClick] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  function Handler() {
    if (click == false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  return (
    <Card style={!click ? { boxshadow: "none" } : {}}>
      <Left style={controll ? { background: "" } : {}} onClick={Handler}>
        <h6>{props.product.name}</h6>
        <h2>R${props.product.price}</h2>
        <img src={props.product.imageUrl}></img>
      </Left>
      <Right style={!click ? { display: "none", boxshadown: "none" } : {}}>
        <Div>
          <h4>Funcionário(a): {props.employee.name}</h4>
        </Div>
        <h2>Cliente: {props.customer.name}</h2>
        <h2>Franquia: {props.employee.shop.city}</h2>
        <p>{props.product.description}</p>
        <Buttons>
          <HireMe
            style={controll ? { background: "red" } : {}}
            onClick={handle}
          >
            {"Apagar"}
          </HireMe>
          <Link to={`/sales/update/${props.id}`}>
            <HireMe style={controll ? { background: "#fc4c35" } : {}}>
              {"Editar"}
            </HireMe>
          </Link>
        </Buttons>
      </Right>
    </Card>
  );
}
