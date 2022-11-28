import Api from "./api";

const EmployeeService = {
    getAll: () => Api.get("/employee/"),
	getId: (id) => Api.get(`/employee/${id}`),
	add: (params) => Api.post("/employee/", params),
	update: (id, params) => Api.put(`/employee/${id}`, params),
	delete: (id) => Api.delete(`/employee/${id}`)
};
export default EmployeeService;