import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./Pages/Home";
import DashboardScreen from "./Pages/Dashboard";
import ProductsScreen from "./Pages/Products";
import ShopsScreen from "./Pages/Shops";
import SalesScreen from "./Pages/Sales"
import EmployeesScreen from "./Pages/Employees";
import CustomersScreen from "./Pages/Customers";
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
				<Route
					path="/products/register"
					element={<RegisterScreen type="products" />}
				/>
				<Route
					path="/products/update/:id"
					element={<UpdateScreen type="products" />}
				/>
				<Route path="/shops" element={<ShopsScreen />} />
				<Route
					path="/shops/register"
					element={<RegisterScreen type="shops" />}
				/>
				<Route
					path="/shops/update/:id"
					element={<UpdateScreen type="shops" />}
				/>
				<Route path="/employees" element={<EmployeesScreen />} />
				<Route
					path="/employees/register"
					element={<RegisterScreen type="employees" />}
				/>
				<Route
					path="/employees/update/:id"
					element={<UpdateScreen type="employees" />}
				/>
				<Route path="/customers" element={<CustomersScreen />} />
				<Route
					path="/customers/register"
					element={<RegisterScreen type="customers" />}
				/>
				<Route
					path="/customers/update/:id"
					element={<UpdateScreen type="customers" />}
				/>
        <Route path="/sales" element={<SalesScreen />} />
				<Route path="/sales/register" element={<RegisterScreen type="sales"/>}/>
				<Route path="/sales/update/:id" element={<UpdateScreen type="sales"/>}/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}
