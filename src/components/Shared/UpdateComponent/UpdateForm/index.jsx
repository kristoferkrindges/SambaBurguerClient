import React from "react";
import FormUpProduct from "../FormUpProduct";
import FormUpShop from "../FormUpShop";
import FormUpEmployee from "../FormUpEmployee";

function UpdateForm(props) {
  if (props.type == "products") {
    return <FormUpProduct></FormUpProduct>;
  } else if (props.type == "shops") {
    return <FormUpShop></FormUpShop>;
  } else if (props.type == "employees") {
    return <FormUpEmployee />;
  }
}

export default UpdateForm;
