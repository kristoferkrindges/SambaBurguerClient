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
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	IoCamera,
	Social,
	InputImage,
	LabelImage,
	Title,
	UserDetails,
	InputBox,
	ButtonResult,
	Collection,
	IoClose,
	IoPencil,
	InputName,
	TextInput,
	Left,
	Right,
	ContainerInput,
	Controller,
	IoMail,
	IoLock,
	IoPerson,
	IoMail2,
	IoLock2,
	IoPerson2,
    IconButton,
    IoSearc,
    ModalImage,
    Input,
    Exit,
    IoFastFood,
} from "./style";
import ProductService from '../../../../services/products';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

function UpdateForm(props) {
	// Prudct Section
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState();
	const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    // Produtc final

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
    useEffect(()=>{
		fetchProduct(id);
        // configProduct();
	}, [])
    async function fetchProduct(id){
		const response = await ProductService.getId(id);
		setProduct(response.data);
        setProductName(response.data.name)
        setProductPrice(response.data.price)
        setProductDescription(response.data.description)
        setProductImage(response.data.imageUrl)
	}
    console.log(productDescription)
    // async function configProduct(){
	// 	setProductName(product.name)
    //     setProductPrice(product.price)
    //     setProductDescription(product.description)
    //     setProductImage(product.imageUrl)
	// }
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
    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
    // Final Product
    if(props.type == "products"){
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
}

export default UpdateForm;
