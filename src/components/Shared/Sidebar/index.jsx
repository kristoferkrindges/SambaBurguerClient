import React, { useContext, useRef, useState, } from "react";
import {
	Container,
	SDivider,
	SLink,
	SLinkContainer,
	SLinkIcon,
	SLinkLabel,
	SLinkNotification,
	Logo,
	Img,
	Name,
	Context,
	ContextTwo,
	Button,
	STheme,
	SThemeLabel,
	SThemeToggler,
	SToggleThumb,
	IoAppss,
} from "./style";
import { SidebarData, Settings, Settings2 } from "./SidebarData";

import { ThemeContext } from "../../../App";
import { useLocation } from "react-router-dom";


function Sidebar(props) {
	const searchRef = useRef(null);
	const { setTheme, theme } = useContext(ThemeContext);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { pathname } = useLocation();


		return (
			// <Container>
			<ContextTwo
				isOpen={sidebarOpen}
				style={
					props.total
						? { margin: "0% 0% 0% 0%", height: "1010px", borderradius: "0" }
						: {}
				}
			>
				<Logo>
					<IoAppss
						isOpen={sidebarOpen}
						onClick={() => setSidebarOpen((p) => !p)}
					></IoAppss>
				</Logo>

				<SDivider />
				{SidebarData.map(({ icon, label, notification, to }) => (
					<SLinkContainer key={label} isActive={pathname === to}>
						<SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && (
								<>
									<SLinkLabel>{label}</SLinkLabel>
									{/* if notifications are at 0 or null, do not display */}
									{!!notification && (
										<SLinkNotification>{notification}</SLinkNotification>
									)}
								</>
							)}
						</SLink>
					</SLinkContainer>
				))}
				<SDivider />
				{/* onClick={props.logoutUser} */}
				<SLinkContainer
					key={Settings2[0].label}
					// onClick={logoutUser ? logoutUser : ""}
				>
					<SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
						<SLinkIcon>{Settings2[0].icon}</SLinkIcon>
						{sidebarOpen && <SLinkLabel>{Settings2[0].label}</SLinkLabel>}
					</SLink>
				</SLinkContainer>
				<SDivider />
				<STheme>
					{sidebarOpen && <SThemeLabel>Modo escuro</SThemeLabel>}
					<SThemeToggler
						isActive={theme === "dark"}
						onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
					>
						<SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
					</SThemeToggler>
				</STheme>
			</ContextTwo>
		);
}
export default Sidebar;
