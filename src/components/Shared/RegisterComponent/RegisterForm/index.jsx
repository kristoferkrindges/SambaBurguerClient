import React, {useState, useEffect} from 'react'
import { Image  } from "./style";
import FormRegisterProduct from "../FormRegisterProduct"
import FormRegisterShop from "../FormRegisterShop"
import FormRegisterEmployee from '../FormRegisterEmployee';

function RegisterComponent(props){
    if(props.type == "products"){
        return(
            <FormRegisterProduct/>
            
        )
    }else if(props.type == "shops"){
        return(
            <FormRegisterShop/>
        )
    }else if(props.type == "employees"){
        return(
            <FormRegisterEmployee/>
        )
    }
}

export default RegisterComponent