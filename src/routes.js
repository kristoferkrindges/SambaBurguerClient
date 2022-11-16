import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./Pages/Home";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
export default function Routess() {
	return (
		
				<Router>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Router>
			
	);
}