import React, { useState, useEffect } from "react";
import {
	Image,
	IconImageCustomer,
	ContentForm,
	Form,
	FormHeader,
	Title,
	H1,
	IconButton,
	InputGroup,
	InputBox,
	Label,
	Input,
	ContextButton,
	Button,
	IoSearc,
	Context,
	ModalImage,
	Exit,
	Select,
	Option,
	InputDate,
	GenderInputs,
	GenderTitle,
	H6,
	GenderGroup,
	GenderInput,
	InputRadio,
} from "../RegisterForm/style";
import CustomerService from "../../../../services/customers";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function FormRegisterCustomer(props) {
	// Customer Section
	const [customerName, setCustomerName] = useState("");
	const [customerGender, setCustomerGender] = useState("");
	const [customerCpf, setCustomerCpf] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");
	const [customerBirthDate, setCustomerBirthDate] = useState("");
	const [customerAddress, setCustomerAddress] = useState("");
	const [customerCep, setCustomerCep] = useState("");
	const [customerImage, setCustomerImage] = useState("");

	//Modal
	const [modal, setModal] = useState(false);

	//Redirect
	const [redirectToDash, setRedirectToDash] = useState(false);
	const [route, setRoute] = useState("");

	//Error form
	const [error, setError] = useState(false);

	//Customer
	const handleSubmitCustomer = async (evt) => {
		evt.preventDefault();

		try {
			const customer = await CustomerService.add({
				name: customerName,
				gender: customerGender,
				cpf: customerCpf,
				email: customerEmail,
				birthDate: customerBirthDate,
				address: customerAddress,
				cep: customerCep,
				imageUrl: customerImage,
			});
			setRoute("/customers");
			setRedirectToDash(true);
			toast.success("Cliente cadastrado com sucesso!");
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};
	if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
	return (
		<Context>
			<Image>
				{customerImage ? (
					<img src={customerImage}></img>
				) : (
					<IconImageCustomer />
				)}
			</Image>
			<ContentForm>
				<Form>
					<FormHeader>
						<Title>
							<H1>Cadastro</H1>
						</Title>
						<IconButton>
							<IoSearc
								onClick={() => {
									setModal(true);
								}}
							></IoSearc>
						</IconButton>
					</FormHeader>
					{modal ? (
						<ModalImage>
							<InputBox>
								<Input
									type="text"
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
					<InputGroup>
						<InputBox>
							<Label>Nome</Label>
							<Input
								type="type"
								placeholder=""
								value={customerName}
								required
								onChange={(e) => {
									setCustomerName(e.target.value);
								}}
							/>
						</InputBox>
						<InputBox>
							<Label>Email</Label>
							<Input
								type="text"
								placeholder=""
								value={customerEmail}
								required
								onChange={(e) => {
									setCustomerEmail(e.target.value);
								}}
							/>
						</InputBox>
						<InputBox>
							<Label>CPF</Label>
							<Input
								type="text"
								placeholder=""
								value={customerCpf}
								required
								onChange={(e) => {
									setCustomerCpf(e.target.value);
								}}
							/>
						</InputBox>
						<InputBox>
							<Label>Endereço</Label>
							<Input
								type="text"
								placeholder=""
								value={customerAddress}
								required
								onChange={(e) => {
									setCustomerAddress(e.target.value);
								}}
							/>
						</InputBox>
						<InputBox>
							<Label>CEP</Label>
							<Input
								type="text"
								placeholder=""
								value={customerCep}
								required
								onChange={(e) => {
									setCustomerCep(e.target.value);
								}}
							/>
						</InputBox>
						<InputBox>
							<Label>Data de Nascimento</Label>
							<InputDate
								type="datetime-local"
								placeholder=""
								value={customerBirthDate}
								required
								onChange={(e) => {
									setCustomerBirthDate(e.target.value);
								}}
							/>
						</InputBox>
					</InputGroup>
					<GenderInputs>
						<GenderTitle>
							<H6>Gênero</H6>
							<GenderGroup>
								<GenderInput>
									<InputRadio
										type="radio"
										placeholder=""
										value={"Masculino"}
										required
										onChange={(e) => {
											setCustomerGender(e.target.value);
										}}
									/>
									<Label>Masculino</Label>
								</GenderInput>

								<GenderInput>
									<InputRadio
										type="radio"
										placeholder=""
										value={"Feminino"}
										required
										onChange={(e) => {
											setCustomerGender(e.target.value);
										}}
									/>
									<Label>Feminino</Label>
								</GenderInput>
								<GenderInput>
									<InputRadio
										type="radio"
										placeholder=""
										value={"Outros"}
										required
										onChange={(e) => {
											setCustomerGender(e.target.value);
										}}
									/>
									<Label>Outros</Label>
								</GenderInput>
							</GenderGroup>
						</GenderTitle>
					</GenderInputs>
					<ContextButton>
						<Button
							onClick={(evt) => {
								handleSubmitCustomer(evt);
							}}
						>
							Cadastrar
						</Button>
					</ContextButton>
				</Form>
			</ContentForm>
		</Context>
	);
}

export default FormRegisterCustomer;
