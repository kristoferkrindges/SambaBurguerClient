import React, { useState, useEffect } from "react";
import { Image } from "./style";
import FormRegisterProduct from "../FormRegisterProduct";
import FormRegisterShop from "../FormRegisterShop";
import FormRegisterEmployee from "../FormRegisterEmployee";
import FormRegisterSale from "../FormRegisterSale";
import FormRegisterCustomer from "../FormRegisterCustomer";

function RegisterComponent(props) {
  if (props.type == "products") {
    return <FormRegisterProduct />;
  } else if (props.type == "shops") {
    return <FormRegisterShop />;
  } else if (props.type == "employees") {
    return <FormRegisterEmployee />;
  } else if (props.type == "sales") {
    return <FormRegisterSale />;
  } else if (props.type == "customers") {
		return <FormRegisterCustomer />;
	}


export default RegisterComponent;
