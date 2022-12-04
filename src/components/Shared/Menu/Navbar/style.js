import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { IoContrastOutline, IoContrastSharp } from "react-icons/io5";

export const IoCart = styled(IoContrastOutline)`
	width: 20px;
	height: 20px;
	margin-left: 40px;
	margin-right: 20px;
`;

export const Nav = styled.nav`
	background-color: ${({ theme }) => theme.background};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 999;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1600px;
`;

export const NavLogo = styled(LinkR)`
	color: ${({ theme }) => theme.title};
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
	img {
		cursor: pointer;
		width: 40px;
		margin-right: 20%;
		border: none;
		border-radius: 5px;
	}
	h1 {
		font-size: 20px;
	}
	h1:hover {
		color: #fc4c35;
	}
	@media screen and (max-width: 768px) {
		h1 {
			display: none;
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${({ theme }) => theme.buttons};
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLink = styled(LinkR)`
	color: ${({ theme }) => theme.text};
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&.active {
		color: #15cdfc;
	}
	&:hover {
		transition: all 0.2s ease-in-out;
		border-bottom: 1px solid #fc4c35;
		border-top: 1px solid #fc4c35;
		color: #fc4c35;
	}
`;

export const NavLinks = styled(LinkS)`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		border-bottom: 3px solid #01bf71;
	}
	&:hover {
		color: #fc4c35;
		font-size: 20px;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: black;
	font-size: 16px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
		font-size: 20px;
	}
`;
