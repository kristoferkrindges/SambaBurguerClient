import Api from "./api";

const SalesService = {
    getAll: () => Api.get("/sale/"),
	getId: (id) => Api.get(`/sale/${id}`),
	add: (params) => Api.post("/sale/", params),
	update: (id, params) => Api.put(`/sale/${id}`, params),
	delete: (id) => Api.delete(`/sale/${id}`)
};
export default SalesService;