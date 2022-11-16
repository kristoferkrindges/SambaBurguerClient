import React, {useState} from "react";
import Navbar from "./Navbar"
import Burguer from "./Burguer"


export default function Menu(props) {

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () =>{
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Burguer isOpen={isOpen} toggle={toggle}></Burguer>
			<Navbar toggle={toggle} type={props.type} search={props.search} resp={"Entrar"}></Navbar>
		</>
	);
}