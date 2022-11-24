import React from 'react'
import { Layout, Content, Option, } from "./style";
import Sidebar from "../Sidebar"
import UpateForm from "./UpdateForm"

function UpdateComponent(props){
    return(
        <Layout>
            <Sidebar name="Desconhecido" total={true} />
            <Content>
                <Option>
                    <UpateForm type={props.type}/>
                </Option>
            </Content>
        </Layout>
        
    )
}

export default UpdateComponent