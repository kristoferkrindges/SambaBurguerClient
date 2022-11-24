import React from 'react'
import RegisterComponent from '../components/Shared/RegisterComponent'

function RegisterScreen(props){
    return(
        <RegisterComponent type={props.type}/>
        
    )
}

export default RegisterScreen