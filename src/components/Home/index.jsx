import React from "react";
import { Layout } from "./styles";
import Menu from "../Shared/Menu";
import Main from "./Main";
import Products from "./Products";
import Footer from "../Shared/Footer";
import About from "./About";

export default function Home() {
	return (
		<>
			<Menu type="não" search="home" />
			<Main />
			<Products />
			<About id="#about" />
			<Footer />
		</>
	);
}
