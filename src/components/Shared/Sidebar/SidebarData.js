import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import {
	IoPeopleOutline,
	IoHelpCircleOutline,
	IoBasketOutline,
	IoBuildOutline,
	IoFastFoodOutline,
	IoCartOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
export const SidebarData = [
	{
		label: "Home",
		icon: <AiOutlineHome />,
		to: "/",
		notification: 0,
	},
	{
		label: "Venda",
		icon: <IoCartOutline />,
		to: "/sales",
		notification: 0,
	},
	{
		label: "Produtos",
		icon: <IoFastFoodOutline />,
		to: "/products",
		notification: 0,
	},
	{
		label: "Clientes",
		icon: <IoPeopleOutline />,
		to: "/customers",
		notification: 0,
	},
	{
		label: "Funcionários",
		icon: <IoBuildOutline />,
		to: "/employees",
		notification: 0,
	},
	{
		label: "Franquias",
		icon: <IoBasketOutline />,
		to: "/shops",
		notification: 0,
	},

];

export const Settings = [
	{
		label: "Configurações",
		icon: <AiOutlineSetting />,
	},
	{
		label: "Suporte",
		icon: <IoHelpCircleOutline />,
	},
];

export const Settings2 = [
	{
		label: "Sair",
		icon: <MdLogout />,
	}
];
