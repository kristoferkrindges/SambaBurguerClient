import React, {useState, useEffect} from 'react'
import { Image  } from "./style";
import FormRegisterProduct from "../FormRegisterProduct"
import FormRegisterShop from "../FormRegisterShop"

function RegisterComponent(props){
    if(props.type == "products"){
        return(
            <FormRegisterProduct/>
            
        )
    }else if(props.type == "shops"){
        return(
            <FormRegisterShop/>
        )
    }
}

export default RegisterComponent