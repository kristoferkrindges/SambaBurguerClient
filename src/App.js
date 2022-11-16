import { GlobalStyle } from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Routes from "./routes";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const ThemeContext = React.createContext(null);

function App() {
	const [theme, setTheme] = useState("light");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;
	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<ThemeProvider theme={themeStyle}>
				<GlobalStyle />
				<Routes></Routes>
				<ToastContainer></ToastContainer>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
export default App;
