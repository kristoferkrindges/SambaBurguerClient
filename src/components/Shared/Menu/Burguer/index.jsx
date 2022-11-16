import React, { useContext, useRef, useState, useEffect } from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
	IoCart,
} from "./style";
import { ThemeContext } from "../../../../App";

export default function Burguer({ isOpen, toggle }) {
	const { setTheme, theme } = useContext(ThemeContext);
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="/" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to="/publication" onClick={toggle}>
						Publicar
					</SidebarLink>
					<SidebarLink to="/login" onClick={toggle}>
						Perfil
					</SidebarLink>
					<SidebarLink to="/" onClick={toggle}>
					<IoCart isActive={theme === "dark"}
						onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}/>
					</SidebarLink>
					
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/login">Entrar</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
}
