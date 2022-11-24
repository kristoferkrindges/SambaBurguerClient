import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./Pages/Home";
import DashboardScreen from "./Pages/Dashboard";
import ProductsScreen from "./Pages/Products"
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import RegisterScreen from "./Pages/RegisterPage";
import UpdateScreen from "./Pages/UpdatePage";
export default function Routess() {
	return (
		
				<Router>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<DashboardScreen />} />
						<Route path="/products" element={<ProductsScreen />} />
						<Route path="/products/register" element={<RegisterScreen type="products"/>}/>
						<Route path="/products/update/:id" element={<UpdateScreen type="products"/>}/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Router>
			
	);
}