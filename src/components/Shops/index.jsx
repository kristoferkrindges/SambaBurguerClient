import React, {useState, useEffect} from "react";
import { Layout, Content, InfoData, Option, Title, Cont, BtnContent, Button } from "./style";
import Shop from "../Shared/Shop"
import Sidebar from "../Shared/Sidebar"
import ShopsService from "../../services/shops";
import SearchBar from "../Shared/SearchBar";
import { Link } from "react-router-dom";
import Carrousel from "react-elastic-carousel";
import ModalDelete from "../Shared/ModalDelete";

export default function Shops(props) {
    const [Shops, setShops] = useState([]);
	const [id, setId] = useState("");
    // children
    const [result, setResult] = useState('');

	//Modal
	const [modal, setModal] = useState(false);

	useEffect(()=>{
		fetchShops();
	}, [])
	// Get
	async function fetchShops(){
		const response = await ShopsService.getAll();
		if (response.data.length >= 1){
			setShops(response.data);
		}
	}
	// Delete
	async function DeleteProduct(){
		console.log("foi")
		const response = await ShopsService.delete(id)
		setModal(false)
		const r = Shops.filter((item) => item.id !== id);
		setShops(r);
	}
    console.log(Shops)
    //Pegar dado do SearchBar componente filho
    const updateResult = r =>{
        setResult(r)
    }
	const handleModal = r =>{
		setModal(r)
	}
	const handleId = r =>{
		setId(r)
	}
	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 2 },
	];

	return (
		<Layout>
			<Sidebar name="Desconhecido" total={true} />
			<Content>
				<Option>
					<Title>
						 <span>Franquias</span>
					</Title>
                    <BtnContent>
                        <Link to="/shops/register"><Button>Cadastrar</Button></Link>
                    </BtnContent>
                    <Cont>
                        <SearchBar 
                            placeholder="Procure por Franquias"
                            data={Shops}
                            updateResult={updateResult}
                        />
                        {/* <BtnContent>
                            <Button>Cadastrar</Button>
                        </BtnContent> */}
                    </Cont>
					{modal? <ModalDelete modal={handleModal} yes={DeleteProduct}/>: <></>}
					<Carrousel breakPoints={breakPoints}>
						
							{Shops.length > 0 &&
								Shops.filter((value) => {
									if (result === "") {
										return value;
									} else if (
										value.city
											.toLowerCase()
											.includes(result.toLowerCase())
									) {
										return value;
									}
								})
									.map((value, key) => (
										<Shop
											key={key}
											id={value.id}
											type={1}
											image={value.imageUrl}
											state={value.state}
											cep={value.cep}
											city={value.city}
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
