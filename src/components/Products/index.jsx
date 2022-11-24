import React, {useState, useEffect} from "react";
import { Layout, Content, InfoData, Option, Title, Cont, BtnContent, Button } from "./style";
import Product from "../Shared/Product"
import Sidebar from "../Shared/Sidebar"
import ProductService from "../../services/products";
import SearchBar from "../Shared/SearchBar";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import ModalDelete from "../Shared/ModalDelete";

export default function Products() {
    const [products, setProducts] = useState([]);
	const [id, setId] = useState("");
    // children
    const [result, setResult] = useState('');

	//Modal
	const [modal, setModal] = useState(false);

	useEffect(()=>{
		fetchProducts();
	}, [])
	// Get
	async function fetchProducts(){
		const response = await ProductService.getAll();
		if (response.data.length >= 1){
			setProducts(response.data);
		}
	}
	// Delete
	async function DeleteProduct(){
		console.log("foi")
		const response = await ProductService.delete(id)
		setModal(false)
		const r = products.filter((item) => item.id !== id);
		setProducts(r);
	}

    //Pegar dado do SearchBar componente filho
    const updateResult = r =>{
        setResult(r)
    }
	const handleModal = r =>{
		setModal(r)
	}
	const handleId = r =>{
		setId(r)
		console.log(r)
	}
	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];

	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Option>
					<Title>
						 <span>Produtos</span>
					</Title>
                    <BtnContent>
                        <Link to="/products/register"><Button>Cadastrar</Button></Link>
                    </BtnContent>
                    <Cont>
                        <SearchBar 
                            placeholder="Procure por produtos"
                            data={products}
                            updateResult={updateResult}
                        />
                        {/* <BtnContent>
                            <Button>Cadastrar</Button>
                        </BtnContent> */}
                    </Cont>
					{modal? <ModalDelete modal={handleModal} yes={DeleteProduct}/>: <></>}
					<Carrousel breakPoints={breakPoints}>
						
							{products.length > 0 &&
								products.filter((value) => {
									if (result === "") {
										return value;
									} else if (
										value.name
											.toLowerCase()
											.includes(result.toLowerCase())
									) {
										return value;
									}
								})
									.map((value, key) => (
										<Product
											key={key}
											id={value.id}
											type={1}
											imageUrl={value.imageUrl}
											name={value.name}
											price={value.price}
											description={value.description}
											// onClick={HandlerButtonUpdate}
											modal={handleModal}
											getId={handleId}
										/>
									))}
						
					</Carrousel>
				</Option>
			</Content>
		</Layout>
	);
}
