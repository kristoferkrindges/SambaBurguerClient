import React, { useEffect, useState } from "react";
import { Cards, Title, Context } from "./style";
import Product from "../../Shared/Product";
import Carrousel from "react-elastic-carousel";
import ProductService from "../../../services/products"

export default function Products() {
	const [product, setProduct] = useState([]);
	useEffect(()=>{
		fetchProducts();
	}, [])
	// Get
	async function fetchProducts(){
		const response = await ProductService.getAll();
		if (response.data.length >= 1){
			setProduct(response.data);
		}
	}

	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<Cards>
			<Title>Veja nossos Produtos!</Title>
			<Context>
				<Carrousel breakPoints={breakPoints}>
					{product.map((product, key) => 
							<>
								<Product
									key={key}
									id={product.id}
									name={product.name}
									price={product.price}
									description={product.description}
									imageUrl={product.imageUrl}
								/>
							</>
					)}
		   </Carrousel>
		   </Context>
        </Cards>
		
	);
}