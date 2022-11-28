import React, { useState, useEffect } from "react";
import {
	Container,
	Context,
	Top,
	Bottom,
	Layout,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Buttons,
	HireMe,
	Social,
	Title,
	UserDetails,
	InputBox,
	InputName,
	TextInput,
	Left,
	Right,
	ContainerInput,
	Controller,
	IoMail,
	IoLock,
	IoPerson,
    IoSearc,
    ModalImage,
    Input,
    Exit,
    IoBasket,
    IoBasket2,
    HireMe2,
} from "../UpdateForm/style";
import ShopsService from "../../../../services/shops";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function FormUpShop(props) {
    //Others
    let { id } = useParams();

    //Modal
    const [modal, setModal] = useState(false);

    // Redirect
    const [redirectToDash, setRedirectToDash] = useState(false);
    const [route, setRoute] = useState("")
    // Error form
    const [error, setError] = useState(false);

    const [open, setOpen] = useState(false);
    function HandlerOpen() {
		if (open == false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}

    // Shop Section
    const [shopState, setShopState] = useState("");
    const [shopCep, setShopCep] = useState("");
    const [shopCity, setShopCity] = useState("");
    const [shopImage, setShopImage] = useState("");
    useEffect(()=>{
        fetchShop(id);
    }, [])
    async function fetchShop(id){
        const response = await ShopsService.getId(id);
        setShopState(response.data.state)
        setShopCep(response.data.cep)
        setShopCity(response.data.city)
        setShopImage(response.data.imageUrl)
    }
    const handleSubmitShop = async (evt) => {
        // evt.preventDefault();
        try{
            const shop = await ShopsService.update( id,{
                state: shopState,
                cep: shopCep,
                city: shopCity,
                imageUrl: shopImage
            });
            setRoute("/shops")
            setRedirectToDash(true);
            toast.success("Franquia alterada com sucesso!")
        } catch (error) {
            setError(true);
            console.log(error)
        }
    };
    
    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
    return (
        <Container>
            <Context>
                <Layout style={!open ? { background: "none" } : {}}>
                    <Top>
                        <CardContent>
                            <Image>
                                <Logo src={shopImage} />
                                <IoSearc onClick={() => {setModal(true)}}></IoSearc>
                            </Image>
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
                            <Social>
                                <IoBasket/>
                            </Social>
                            <NameSubject>
                                <Name style={open ? { display: "none" } : {}}>
                                    {open ? shopCity : shopCity}
                                </Name>
                            </NameSubject>
                            <Buttons
                                onClick={HandlerOpen}
                                style={open ? { display: "none" } : {}}
                            >
                                <HireMe2>Editar</HireMe2>
                            </Buttons>
                        </CardContent>
                    </Top>
                    <Bottom style={!open ? { display: "none" } : {}}>
                        <Title>Editar Franquia</Title>
                        <UserDetails>
                            <Left>
                                <Controller>
                                    <span>Cidade</span>
                                    <ContainerInput>
                                        <InputName
                                            type="text"
                                            placeholder=""
                                            value={shopCity}
                                            onChange={(e) => {
                                                setShopCity(e.target.value);
                                            }}/>
                                        <TextInput>
                                            <IoBasket2/>
                                        </TextInput>
                                    </ContainerInput>
                                </Controller>
                                <Controller>
                                    <span>Estado</span>
                                    <ContainerInput>
                                        <InputName
                                            type="text"
                                            placeholder=""
                                            value={shopState}
                                            onChange={(e) => {
                                                setShopState(e.target.value);
                                            }}/>
                                        <TextInput>
                                            <IoBasket2/>
                                        </TextInput>
                                    </ContainerInput>
                                </Controller>
                            </Left>
                            <Right>
                                <Controller>
                                    <span>Cep</span>
                                    <ContainerInput>
                                        <InputName
                                            type="text"
                                            placeholder=""
                                            value={shopCep}
                                            onChange={(e) => {
                                                setShopCep(e.target.value);
                                            }}/>
                                        <TextInput>
                                            <IoBasket2/>
                                        </TextInput>
                                    </ContainerInput>
                                </Controller>
                            </Right>
                        </UserDetails>
                        <Buttons onClick={HandlerOpen} style={open ? {} : {}}>
                            <HireMe
                                onClick={() => {
                                    HandlerOpen();
                                    handleSubmitShop();
                                }}
                            >
                                Pronto
                            </HireMe>
                        </Buttons>
                    </Bottom>
                </Layout>
            </Context>
        </Container>
    );
}

export default FormUpShop;
