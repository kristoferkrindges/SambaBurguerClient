import Api from "./api";

const ShopsService = {
    getAll: () => Api.get("/shop/"),
	getId: (id) => Api.get(`/shop/${id}`),
	add: (params) => Api.post("/shop/", params),
	update: (id, params) => Api.put(`/shop/${id}`, params),
	delete: (id) => Api.delete(`/shop/${id}`)
};
export default ShopsService;