import React, { useContext, useRef, useState, useEffect } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavLink,
	IoCart
} from "./style";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "../../../../App";
import logo from "../../../../assets/images/imagem.png"

export default function Navbar({ toggle, resp }) {
	const { setTheme, theme } = useContext(ThemeContext);
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<img className="logo" src={logo}></img>
						
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars></FaBars>
					</MobileIcon>
					<NavMenu>
						<NavLink to="/about">Lanches</NavLink>
						<NavLink to="/about">Sobre</NavLink>
						<NavLink to="/about">Franquias</NavLink>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">{resp}</NavBtnLink>
						<IoCart isActive={theme === "dark"}
						onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}/>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}