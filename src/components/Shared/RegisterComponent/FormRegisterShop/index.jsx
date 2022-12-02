import React, {useState, useEffect} from 'react'
import { Image, ContentForm, Form, FormHeader, Title, H1,
IconButton, InputGroup, InputBox, Label, Input, ContextButton, Button, IoSearc, Context, 
ModalImage, Exit, IconImageShop } from "../RegisterForm/style";
import ShopsService from '../../../../services/shops';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

function FormRegisterShop(props){
    // Shop Section
    const [shopState, setShopState] = useState("");
    const [shopCep, setShopCep] = useState("");
    const [shopCity, setShopCity] = useState("");
    const [shopImage, setShopImage] = useState("");

    //Modal
    const [modal, setModal] = useState(false);

    // Redirect
    const [redirectToDash, setRedirectToDash] = useState(false);
    const [route, setRoute] = useState("")
    // Error form
    const [error, setError] = useState(false);


    //Shop
    const handleSubmitShop = async (evt) => {
        evt.preventDefault();

        try{
            const shop = await ShopsService.add({
                state: shopState,
                cep: shopCep,
                city: shopCity,
                imageUrl: shopImage
            });
            setRoute("/shops")
            setRedirectToDash(true);
            toast.success("Franquia cadastrada com sucesso!")
		} catch (error) {
			setError(true);
            console.log(error)
		}
    };

    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
    return(
        <Context>
            <Image>
            {shopImage? <img src={shopImage}></img>:<IconImageShop/>}
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
                                value={shopImage}
                                onChange={(e) => {
                                    setShopImage(e.target.value);
                                }}/>
                        </InputBox>
                        <Exit onClick={() => {setModal(false)}}>Pronto</Exit>
                    </ModalImage> 
                    : <></>}
                    <InputGroup>
                        <InputBox>
                            <Label>Cidade</Label>
                            <Input type="text"
                                placeholder=""
                                value={shopCity}
                                required
                                onChange={(e) => {
                                    setShopCity(e.target.value);
                                }}/>
                        </InputBox>

                        <InputBox>
                            <Label>Estado</Label>
                            <Input type="text"
                                placeholder=""
                                value={shopState}
                                required
                                onChange={(e) => {
                                    setShopState(e.target.value);
                                }}/>
                        </InputBox>

                        <InputBox>
                            <Label>Cep</Label>
                            <Input type="text"
                                placeholder=""
                                value={shopCep}
                                required
                                onChange={(e) => {
                                    setShopCep(e.target.value);
                                }}/>
                        </InputBox>

                    </InputGroup>
                    <ContextButton>
                        <Button onClick={(evt)=>{
                            handleSubmitShop(evt);
                        }}>Cadastrar</Button>
                    </ContextButton>
                    {/* {error && <h1>Error</h1>} */}
                </Form>
            </ContentForm>
        </Context>
        
    )
}

export default FormRegisterShop