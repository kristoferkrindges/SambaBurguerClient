import React, {useState, useEffect} from 'react'
import { Image, IconImageEmployee, ContentForm, Form, FormHeader, Title, H1,
IconButton, InputGroup, InputBox, Label, Input, ContextButton, Button, IoSearc, 
Context, ModalImage, Exit, Select, Option, InputDate, GenderInputs, GenderTitle, H6, 
GenderGroup, GenderInput, InputRadio} from "../RegisterForm/style";
import EmployeeService from '../../../../services/employees';
import ShopsService from '../../../../services/shops';
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

function FormRegisterEmployee(props){
    // Employee Section
    const [employeeName, setEmployeeName] = useState("");
	const [employeeShopId, setEmployeeShopId] = useState();
	const [employeeGender, setEmployeeGender] = useState("");
    const [employeeCpf, setEmployeeCpf] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeeBirthDate, setEmployeeBirthDate] = useState("");
    const [employeeAddress, setEmployeeAddress] = useState("");
    const [employeeImage, setEmployeeImage] = useState("");
    const [employeeFunction, setEmployeeFunction] = useState("");

    //Shops
    const [shops, setShops] = useState([])
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

    //Modal
    const [modal, setModal] = useState(false);

    // Redirect
    const [redirectToDash, setRedirectToDash] = useState(false);
    const [route, setRoute] = useState("")
    // Error form
    const [error, setError] = useState(false);

    //Employee
    const handleSubmitEmployee = async (evt) => {
        // evt.preventDefault();

        try{
            const remployee = await EmployeeService.add({
                name: employeeName,
                shopId: employeeShopId,
                gender: employeeGender,
                cpf: employeeCpf,
                email: employeeEmail,
                birthDate: employeeBirthDate,
                addres: employeeAddress,
                imageUrl: employeeImage,
                function: employeeFunction
            });
            setRoute("/Employees")
            setRedirectToDash(true);
            toast.success("Produto cadastrado com sucesso!")
		} catch (error) {
			setError(true);
            console.log(error)
		}
    };
    console.log(employeeShopId)
    console.log(employeeFunction)
    console.log(employeeBirthDate)
    if (redirectToDash == true) return <Navigate to={{ pathname: route }} />;
    return(
        <Context>
            <Image>
                {employeeImage? <img src={employeeImage}></img>:<IconImageEmployee/>}
            </Image>
            <ContentForm>
                <Form>
                    <FormHeader>
                        <Title>
                            <H1>Cadastro</H1>
                        </Title>
                        <IconButton>
                            <IoSearc onClick={() => {setModal(true)}}></IoSearc>
                        </IconButton>
                    </FormHeader>
                    {modal? 
                    <ModalImage >
                        <InputBox>
                        <Input type="text"
                                placeholder=""
                                value={employeeImage}
                                onChange={(e) => {
                                    setEmployeeImage(e.target.value);
                                }}/>
                        </InputBox>
                        <Exit onClick={() => {setModal(false)}}>Pronto</Exit>
                    </ModalImage> 
                    : <></>}
                    <InputGroup>
                        <InputBox>
                            <Label>Nome</Label>
                            <Input type="text"
                                placeholder=""
                                value={employeeName}
                                required
                                onChange={(e) => {
                                    setEmployeeName(e.target.value);
                                }}/>
                        </InputBox>

                        <InputBox>
                            <Label>Email</Label>
                            <Input type="text"
                                placeholder=""
                                value={employeeEmail}
                                required
                                onChange={(e) => {
                                    setEmployeeEmail(e.target.value);
                                }}/>
                        </InputBox>

                        <InputBox>
                            <Label>CPF</Label>
                            <Input type="text"
                                placeholder=""
                                value={employeeCpf}
                                required
                                onChange={(e) => {
                                    setEmployeeCpf(e.target.value);
                                }}/>
                        </InputBox>

                        <InputBox>
                            <Label>Endereço</Label>
                            <Input type="text"
                                placeholder=""
                                value={employeeAddress}
                                required
                                onChange={(e) => {
                                    setEmployeeAddress(e.target.value);
                                }}/>
                        </InputBox>
                        <InputBox>
                            <Label>Função</Label>
                            <Select 
                                onChange={(e) => {
                                    setEmployeeFunction(e.target.value);
                                }}>
                                <Option value="">Escolha</Option>
                                <Option value="Cozinheiro">Cozinheiro</Option>
                                <Option value="Entregador">Entregador</Option>
                                <Option value="Garçom">Garçom</Option>
                                <Option value="Balconista">Balconista</Option>
                                <Option value="Marketing">Marketing</Option>
                                <Option value="Programador">Programador</Option>
                                <Option value="Segurança">Segurança</Option>
                            </Select>
                        </InputBox>

                        <InputBox>
                            <Label>Franquia</Label>
                            <Select 
                                onChange={(e) => {
                                    setEmployeeShopId(e.target.value);
                                }}>
                                <Option value="">Escolha</Option>
                                {shops.length > 0 && 
                                    shops.map((s, key) => (
                                        <Option
                                            key={key}
                                            value={s.id}
                                        >{s.city}</Option>
                                    ))}
                            </Select>
                        </InputBox>

                        <InputBox>
                            <Label>Data de Nascimento</Label>
                            <InputDate type="date"
                                placeholder=""
                                value={employeeBirthDate}
                                required
                                onChange={(e) => {
                                    setEmployeeBirthDate(e.target.value);
                                }}/>
                        </InputBox>
                    </InputGroup>
                    <GenderInputs>
                        <GenderTitle>
                            <H6>Gênero</H6>
                            <GenderGroup>
                                <GenderInput>
                                    <InputRadio type="radio"
                                        placeholder=""
                                        value={"Masculino"}
                                        required
                                        onChange={(e) => {
                                            setEmployeeGender(e.target.value);
                                        }}/>
                                    <Label>Masculino</Label>
                                </GenderInput>

                                <GenderInput>
                                    <InputRadio type="radio"
                                        placeholder=""
                                        value={"Feminino"}
                                        required
                                        onChange={(e) => {
                                            setEmployeeGender(e.target.value);
                                        }}/>
                                    <Label>Feminino</Label>
                                </GenderInput>
                                <GenderInput>
                                    <InputRadio type="radio"
                                        placeholder=""
                                        value={"Outros"}
                                        required
                                        onChange={(e) => {
                                            setEmployeeGender(e.target.value);
                                        }}/>
                                    <Label>Outros</Label>
                                </GenderInput>
                            </GenderGroup>
                        </GenderTitle>
                    </GenderInputs>
                    <ContextButton>
                        <Button onClick={()=>{
                            handleSubmitEmployee();
                        }}>Cadastrar</Button>
                    </ContextButton>
                    {/* {error && <h1>Error</h1>} */}
                </Form>
            </ContentForm>
        </Context>
        
    )
}

export default FormRegisterEmployee