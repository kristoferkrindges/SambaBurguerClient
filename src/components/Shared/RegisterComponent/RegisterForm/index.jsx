import React, {useState, useEffect} from 'react'
import { Image, IconImage, ContentForm, Form, FormHeader, Title, H1,
IconButton, InputGroup, InputBox, Label, Input, ContextButton, Button, IoSearc, Context, ModalImage, Exit  } from "./style";
import ProductService from '../../../../services/products';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

function RegisterComponent(props){
    // Prudct Section
    const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState();
	const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    // Produtc final

    //Modal
    const [modal, setModal] = useState(false);

    // Redirect
    const [redirectToDash, setRedirectToDash] = useState(false);
    const [route, setRoute] = useState("")
    // Error form
    const [error, setError] = useState(false);

    const handleSubmitProduct = async (evt) => {
        // evt.preventDefault();

        try{
            const product = await ProductService.add({
                name: productName,
                price: productPrice,
                description: productDescription,
                imageUrl: productImage
            });
            console.log(product)
            setRoute("/products")
            setRedirectToDash(true);
            toast.success("Produto cadastrado com sucesso!")
            console.log("até aqui")
		} catch (error) {
			setError(true);
            console.log(error)
		}
    };
    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
    // Final Product Section
    if(props.type == "products"){
        return(
            <Context>
                <Image>
                    <IconImage></IconImage>
                </Image>
                <ContentForm>
                    {/* onSubmit={handleSubmitProduct} */}
                    <Form >
                        <FormHeader>
                            <Title>
                                <H1>Cadastro</H1>
                            </Title>
                            <IconButton>
                                <IoSearc onClick={() => {setModal(true)}}></IoSearc>
                            </IconButton>
                        </FormHeader>
                        {modal? 
                        <ModalImage >
                            <InputBox>
                            <Input type="text"
                                    placeholder=""
                                    value={productImage}
                                    onChange={(e) => {
                                        setProductImage(e.target.value);
                                    }}/>
                            </InputBox>
                            <Exit onClick={() => {setModal(false)}}>Pronto</Exit>
                        </ModalImage> 
                        : <></>}
                        <InputGroup>
                            <InputBox>
                                <Label>Nome</Label>
                                <Input type="text"
                                    placeholder=""
                                    value={productName}
                                    required
                                    onChange={(e) => {
                                        setProductName(e.target.value);
                                    }}/>
                            </InputBox>

                            <InputBox>
                                <Label>Preço</Label>
                                <Input type="number"
                                    placeholder=""
                                    value={productPrice}
                                    required
                                    onChange={(e) => {
                                        setProductPrice(e.target.value);
                                    }}/>
                            </InputBox>

                            <InputBox>
                                <Label>Descrição</Label>
                                <Input type="text"
                                    placeholder=""
                                    value={productDescription}
                                    required
                                    onChange={(e) => {
                                        setProductDescription(e.target.value);
                                    }}/>
                            </InputBox>

                        </InputGroup>
                        <ContextButton>
                        {/* <Button onSubmit={handleSubmitProduct}
                        >Cadastrar</Button> */}
                            <Button onClick={()=>{
                                handleSubmitProduct();
                            }}>Cadastrar</Button>
                        </ContextButton>
                        {/* {error && <h1>Error</h1>} */}
                    </Form>
                </ContentForm>
            </Context>
            
        )
    }
    return(
        <>
        </>
        
    )
}

export default RegisterComponent