import Api from "./api";

const ProductService = {
    getAll: () => Api.get("/product/"),
	getId: (id) => Api.get(`/product/${id}`),
	add: (params) => Api.post("/product/", params),
	update: (id, params) => Api.put(`/product/${id}`, params),
	delete: (id) => Api.delete(`/product/${id}`)
};
export default ProductService;