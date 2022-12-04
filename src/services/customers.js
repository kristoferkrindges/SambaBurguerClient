import Api from "./api";

const CustomerService = {
	getAll: () => Api.get("/customer/"),
	getId: (id) => Api.get(`/customer/${id}`),
	add: (params) => Api.post("/customer/", params),
	update: (id, params) => Api.put(`/customer/${id}`, params),
	delete: (id) => Api.delete(`/customer/${id}`),
};
export default CustomerService;
