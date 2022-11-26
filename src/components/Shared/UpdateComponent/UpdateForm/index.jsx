import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import FormUpProduct from "../FormUpProduct";
import FormUpShop from "../FormUpShop";

function UpdateForm(props) {
    if(props.type == "products"){
        return(
            <FormUpProduct></FormUpProduct>
        )
    }else if(props.type == "shops"){
        return(
            <FormUpShop></FormUpShop>
        )
    }
}

export default UpdateForm;
