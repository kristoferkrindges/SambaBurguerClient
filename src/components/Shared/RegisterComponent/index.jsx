import React from 'react'
import { Layout, Content, Option, Title,  } from "./style";
import Sidebar from "../Sidebar"
import RegisterForm from "./RegisterForm"

function RegisterComponent(props){
    return(
        <Layout>
            <Sidebar name="Desconhecido" total={true} />
            <Content>
                <Option>
                    <RegisterForm type={props.type}/>
                </Option>
            </Content>
        </Layout>
        
    )
}

export default RegisterComponent