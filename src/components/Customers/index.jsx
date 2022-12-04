import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../../services/customers";
import {
	Layout,
	Content,
	Option,
	Title,
	BtnContent,
	Button,
	Cont,
} from "../Customers/style";
import ModalDelete from "../Shared/ModalDelete";
import SearchBar from "../Shared/SearchBar";
import Sidebar from "../Shared/Sidebar";
import Carrousel from "react-elastic-carousel";
import Customer from "../Shared/Customer";

export default function Customers(props) {
	const [customers, setCustomers] = useState([]);
	const [id, setId] = useState("");
	const [result, setResult] = useState("");
	const [modal, setModal] = useState(false);

	useEffect(() => {
		fetchCustomers();
	}, []);

	//Get
	async function fetchCustomers() {
		const response = await CustomerService.getAll();
		if (response.data.length >= 1) {
			setCustomers(response.data);
		}
	}

	//Delete
	async function deleteCustomers() {
		const response = await CustomerService.delete(id);
		setModal(false);

		const r = customers.filter((item) => item.id !== id);
		setCustomers(r);
	}

	const updateResult = (r) => {
		setResult(r);
	};

	const handleModal = (r) => {
		setModal(r);
	};

	const handleId = (r) => {
		setId(r);
	};

	//Carrousel
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];

	return (
		<>
			<Layout>
				<Sidebar name="Desconhecido" total={true} />
				<Option>
					<Content>
						<Title>
							<span>Clientes</span>
						</Title>
						<BtnContent>
							<Link to="/customers/register">
								<Button>Cadastrar</Button>
							</Link>
						</BtnContent>
						<Cont>
							<SearchBar
								placeholder="Procure por clientes"
								data={customers}
								updateResult={updateResult}
							/>
						</Cont>
						{modal ? (
							<ModalDelete modal={handleModal} yes={deleteCustomers} />
						) : (
							<></>
						)}
						<Carrousel breakPoints={breakPoints}>
							{customers.length > 0 &&
								customers
									.filter((value) => {
										if (result === "") {
											return value;
										} else if (
											value.name.toLowerCase().includes(result.toLowerCase())
										) {
											return value;
										}
									})
									.map((value, key) => (
										<Customer
											key={key}
											id={value.id}
											imageUrl={value.imageUrl}
											name={value.name}
											gender={value.gender}
											cpf={value.cpf}
											email={value.email}
											birthDate={value.birthdate}
											address={value.address}
											modal={handleModal}
											getId={handleId}
										/>
									))}
						</Carrousel>
					</Content>
				</Option>
			</Layout>
		</>
	);
}
