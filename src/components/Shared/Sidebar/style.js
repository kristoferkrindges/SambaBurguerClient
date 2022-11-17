import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../../styles/variables";
import { IoApps } from "react-icons/io5";

export const IoAppss = styled(IoApps)`
	/* width: 50px;
	height: 50px; */
	color: ${({ theme }) => theme.text};

	&:hover {
		transform: rotate(-180deg);
		opacity: 0.5;
	}
`;

export const Context = styled.div`
	width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
	background: ${({ theme }) => theme.navbar};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	height: 720px;
	padding: ${v.lgSpacing};
	position: fixed;
	z-index: 999;
	margin-top: 5%;
	/* margin-left: 20%; */

	& a h2 {
		color: ${({ theme }) => theme.title};
		text-decoration: none;
	}
	/* 
	@media only screen and (max-width: 768px) {
		display: none;
	} */
`;

export const ContextTwo = styled.div`
	width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
	background: ${({ theme }) => theme.background};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	/* border-radius: 10px; */
	height: 720px;
	padding: ${v.lgSpacing};
	position: fixed;
	z-index: 999;
	margin-top: 5%;

	& a h2 {
		color: ${({ theme }) => theme.title};
		text-decoration: none;
	}

	@media only screen and (max-width: 768px) {
		/* display: none; */
	}
`;

export const Button = styled.button`
	${btnReset};
	position: absolute;
	top: ${v.xxlSpacing};
	right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: ${({ theme }) => theme.bg};
	box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
		0 0 7px ${({ theme }) => theme.bg};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	cursor: pointer;
	margin-bottom: ${v.lgSpacing};

	& svg {
		max-width: 100%;
		height: auto;
		/* border-radius: 50%; */
		color: ${({ theme }) => theme.title};
		font-size: 50px;
		transition: all 0.3s ease;
	}

	svg:hover {
		transform: rotate(-180deg);
	}
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.buttons};
`;

export const Name = styled.h2`
	${btnReset};
	display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
	margin-left: 6px;
	white-space: nowrap;
	font-size: 1.3rem;
	padding: 0 ${v.smSpacing};
	letter-spacing: inherit;
	width: 100%;
	outline: none;
	border: none;
	${({ theme }) => theme.buttons};
	background: transparent;
`;

export const SSearchIcon = styled.button`
	${btnReset};
	padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
	display: flex;
	cursor: pointer;
	svg {
		font-size: 20px;
	}
`;

export const SDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${({ theme }) => theme.bg3};
	margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
	background: ${({ theme, isActive }) =>
		!isActive ? `transparent` : theme.bg3};
	border-radius: ${v.borderRadius};
	margin: 8px 0;
	:hover {
		box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
	}
`;

export const SLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 16px;
	padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
	padding: ${v.smSpacing} ${v.mdSpacing};
	display: flex;
	svg {
		font-size: 20px;
	}
`;

export const SLinkLabel = styled.span`
	display: block;
	flex: 1;
	margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
	font-size: 14px;
	padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
	border-radius: calc(${v.borderRadius} / 2);
	background: ${({ theme }) => theme.primary};
	color: white;
	margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
`;
export const SThemeLabel = styled.span`
	display: block;
	flex: 1;
`;
export const SThemeToggler = styled.button`
	${btnReset};
	margin: 0 auto;
	cursor: pointer;
	width: 36px;
	height: 20px;
	border-radius: 10px;
	background: ${({ theme, isActive }) =>
		!isActive ? theme.bg3 : theme.buttons};
	position: relative;
`;

export const SToggleThumb = styled.div`
	height: 18px;
	width: 18px;
	position: absolute;
	top: 1px;
	bottom: 1px;
	transition: 0.2s ease right;
	right: calc(100% - 18px - 1px);
	border-radius: 50%;
	background: ${({ theme }) => theme.text};
`;
