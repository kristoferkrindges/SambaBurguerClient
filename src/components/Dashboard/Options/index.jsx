import React from "react";
import {
	Layout,
	Title,
	BreadCrumbs,
	InfoData,
	Data,
	ContentData,
} from "./style";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import {
	IoBasketOutline,
	IoPeopleOutline,
	IoBuildOutline,
	IoFastFoodOutline,
} from "react-icons/io5";
import Profile from "../Profile";
import Join from "../Join";
import Product from "../Sale";

const doc = [
	{
		card: "Clientes",
		icon: <IoPeopleOutline />,
		link: "/customers",
	},
	{
		card: "Funcionários",
		icon: <IoBuildOutline />,
		link: "/employees",
	},
	{
		card: "Produtos",
		icon: <IoFastFoodOutline />,
		link: "/products",
	},
	{
		card: "Franquias",
		icon: <IoBasketOutline />,
		link: "/shops",
	},
];

const Options = (props) => {
	return (
		<Layout>
			<Title>
				Bem-vindo <span>{props.name}</span>
			</Title>
			<InfoData>
				{doc.map((value, key) => (
					<Link to={value.link}>
						<Tags key={key} value={value.card} icon={value.icon} />
					</Link>
				))}
			</InfoData>
			<Data>
				<ContentData>
					<Profile
						name={props.name}
						email={props.email}
						img={props.img}
						time={props.time}
					></Profile>
				</ContentData>
				<ContentData>
				<Link to={"/sales"}>
                        <Product/>
				</Link>
				</ContentData>
			</Data>
			<Join></Join>
		</Layout>
	);
};

export default Options;
