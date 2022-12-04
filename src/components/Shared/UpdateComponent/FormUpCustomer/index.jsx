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
	IoBuild2,
	HireMe2,
	IoPerson2,
	IoBuild,
	Select,
	Option,
	GenderInputs,
	GenderTitle,
	H6,
	GenderGroup,
	GenderInput,
	InputRadio,
	Label,
	GenderController,
} from "../UpdateForm/style";
import CustomerService from "../../../../services/customers";
import { Navigate, useAsyncError } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function FormUpCustomer(props) {
	let { id } = useParams();

	const [modal, setModal] = useState(false);
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");
	const [error, setError] = useState(false);
	const [open, setOpen] = useState(false);

	function HandlerOpen() {
		if (open == false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}

	const [customerName, setCustomerName] = useState("");
	const [customerGender, setCustomerGender] = useState("");
	const [customerCpf, setCustomerCpf] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");
	const [customerBirthDate, setCustomerBirthDate] = useState("");
	const [customerAddress, setCustomerAddress] = useState("");
	const [customerCep, setCustomerCep] = useState("");
	const [customerImage, setCustomerImage] = useState("");

	useEffect(() => {
		fetchCustomer(id);
	}, []);

	async function fetchCustomer(id) {
		const response = await CustomerService.getId(id);

		setCustomerName(response.data.name);
		setCustomerGender(response.data.gender);
		setCustomerCpf(response.data.cpf);
		setCustomerEmail(response.data.email);
		setCustomerBirthDate(response.data.birthDate);
		setCustomerAddress(response.data.address);
		setCustomerCep(response.data.cep);
		setCustomerImage(response.data.imageUrl);
	}

	const handleSubmitCustomer = async (evt) => {
		try {
			const Customer = await CustomerService.update(id, {
				name: customerName,
				gender: customerGender,
				cpf: customerCpf,
				email: customerEmail,
				birthDate: customerBirthDate,
				address: customerAddress,
				cep: customerCep,
				imageUrl: customerImage,
			});
			setRoute("/Customers");
			setRedirectToDash(true);
			toast.success("Cliente alterado com sucesso!");
		} catch (error) {
			setError(true);
			console.log(error);
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
								<Logo src={customerImage} />
								<IoSearc
									onClick={() => {
										setModal(true);
									}}
								></IoSearc>
							</Image>
							{modal ? (
								<ModalImage>
									<InputBox>
										<Input
											typeof="text"
											placeholder=""
											value={customerImage}
											onChange={(e) => {
												setCustomerImage(e.target.value);
											}}
										/>
									</InputBox>
									<Exit
										onClick={() => {
											setModal(false);
										}}
									>
										Pronto
									</Exit>
								</ModalImage>
							) : (
								<></>
							)}
							<Social>
								<IoPerson2 />
							</Social>
							<NameSubject>
								<Name style={open ? { display: "none" } : {}}>
									{open ? customerName : customerName}
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
						<Title>Editar Cliente</Title>
						<UserDetails>
							<Left>
								<Controller>
									<span>Nome</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={customerName}
											onChange={(e) => {
												setCustomerName(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Email</span>
									<ContainerInput>
										<InputName
											type="email"
											placeholder=""
											value={customerEmail}
											onChange={(e) => {
												setCustomerEmail(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Cpf</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={customerCpf}
											onChange={(e) => {
												setCustomerCpf(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
							</Left>
							<Right>
								<Controller>
									<span>Endereço</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={customerAddress}
											onChange={(e) => {
												setCustomerAddress(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
								<Controller>
									<span>Cep</span>
									<ContainerInput>
										<InputName
											type="text"
											placeholder=""
											value={customerCep}
											onChange={(e) => {
												setCustomerCep(e.target.value);
											}}
										/>
										<TextInput>
											<IoPerson />
										</TextInput>
									</ContainerInput>
								</Controller>
							</Right>
						</UserDetails>
						<Buttons onClick={HandlerOpen} style={open ? {} : {}}>
							<HireMe
								onClick={() => {
									HandlerOpen();
									handleSubmitCustomer();
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

export default FormUpCustomer;
