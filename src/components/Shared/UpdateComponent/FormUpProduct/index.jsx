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
    IoFastFood,
} from "../UpdateForm/style";
import ProductService from '../../../../services/products';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function FormUpProduct(props) {
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

	// Prudct Section
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    useEffect(()=>{
        fetchProduct(id);
    }, [])
    async function fetchProduct(id){
        const response = await ProductService.getId(id);
        setProduct(response.data);
        setProductName(response.data.name)
        setProductPrice(response.data.price)
        setProductDescription(response.data.description)
        setProductImage(response.data.imageUrl)
    }
    const handleSubmitProduct = async (evt) => {
        // evt.preventDefault();
        try{
            const product = await ProductService.update( id,{
                name: productName,
                price: productPrice,
                description: productDescription,
                imageUrl: productImage
            });
            console.log(product)
            setRoute("/products")
            setRedirectToDash(true);
            toast.success("Produto alterado com sucesso!")
        } catch (error) {
            setError(true);
            console.log(error)
        }
    };
    // Produtc final
    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
        return (
            <Container>
                <Context>
                    <Layout style={!open ? { background: "none" } : {}}>
                        <Top>
                            <CardContent>
                                <Image>
                                    <Logo src={productImage} />
                                    <IoSearc onClick={() => {setModal(true)}}></IoSearc>
                                </Image>
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
                                <Social>
                                    <IoFastFood></IoFastFood>
                                </Social>
                                <NameSubject>
                                    <Name style={open ? { display: "none" } : {}}>
                                        {open ? productName : productName}
                                    </Name>
                                </NameSubject>
                                <Buttons
                                    onClick={HandlerOpen}
                                    style={open ? { display: "none" } : {}}
                                >
                                    <HireMe>Editar</HireMe>
                                </Buttons>
                            </CardContent>
                        </Top>
                        <Bottom style={!open ? { display: "none" } : {}}>
                            <Title>Editar Produto</Title>
                            <UserDetails>
                                <Left>
                                    <Controller>
                                        <span>Nome</span>
                                        <ContainerInput>
                                            <InputName
                                                type="text"
                                                placeholder=""
                                                value={productName}
                                                onChange={(e) => {
                                                    setProductName(e.target.value);
                                                }}/>
                                            <TextInput>
                                                <IoPerson></IoPerson>
                                            </TextInput>
                                        </ContainerInput>
                                    </Controller>
                                    <Controller>
                                        <span>Preço</span>
                                        <ContainerInput>
                                            <InputName
                                                type="number"
                                                placeholder=""
                                                value={productPrice}
                                                onChange={(e) => {
                                                    setProductPrice(e.target.value);
                                                }}/>
                                            <TextInput>
                                                <IoLock></IoLock>
                                            </TextInput>
                                        </ContainerInput>
                                    </Controller>
                                </Left>
                                <Right>
                                    <Controller>
                                        <span>Descrição</span>
                                        <ContainerInput>
                                            <InputName
                                                type="text"
                                                placeholder=""
                                                value={productDescription}
                                                onChange={(e) => {
                                                    setProductDescription(e.target.value);
                                                }}/>
                                            <TextInput>
                                                <IoMail></IoMail>
                                            </TextInput>
                                        </ContainerInput>
                                    </Controller>
                                </Right>
                            </UserDetails>
                            <Buttons onClick={HandlerOpen} style={open ? {} : {}}>
                                <HireMe
                                    onClick={() => {
                                        HandlerOpen();
                                        handleSubmitProduct();
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

export default FormUpProduct;
